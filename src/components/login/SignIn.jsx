import React, { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import "./signin.css";
import { useDispatch } from "react-redux";
import {
  forgotPassword,
  login,
  reSendVerificationCode,
  resetPassword,
} from "../../store/reducers";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";

function SignIn() {
  const [show, setShow] = useState(false);
  const [isopen, setisopen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setisopen(false);
  };
  const handleforgotpassword = () => {
    setisopen(true);
    setShow(false);
  };
  const handleforgotclose = () => {
    setisopen(false);
    setResetNew(false);
  };

  const initialValue = { email: "", password: "" };
  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters at minimum")
      .required("Required"),
  });

  const initialValue1 = { email: "" };

  const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Required"),
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    setLoading(true);
    dispatch(login(payload))
      .then((data) => {
        setShow(false);
        if (data?.payload?.access_token) {
          setLoading(true);
          toast.success("Login successfully!");
          navigate("/dashboard");
        } else {
          toast.error(data?.payload?.message || "Login failed");
        }
      })
      .catch((error) => {
        setLoading(true);
        toast.error(error.message || "Something went wrong");
      });
  };

  const [resetNew, setResetNew] = useState(false);
  const [sending, setSending] = useState(false);

  const initialResetNew = {
    email: localStorage.getItem("USERNAME_TO_CONFIRM"),
    password: "",
    code: "",
  };

  const resetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Required"),
    password: Yup.string()
      .min(3, "Password must be 3 characters at minimum")
      .required("Required"),
    code: Yup.string().required("Required"),
  });

  const handleNewReserSubmit = (values) => {
    setLoading(true);
    dispatch(resetPassword(values))
      .then((data) => {
        setLoading(false);
        toast.success(data?.payload);
        setisopen(false);
        setShow(true);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const resend = () => {
    setSending(true);
    dispatch(
      reSendVerificationCode(localStorage.getItem("USERNAME_TO_CONFIRM"))
    )
      .then((data) => {
        setSending(false);
        toast.success(data?.payload);
      })
      .catch(() => {
        setSending(false);
      });
  };

  const handleSubmit1 = (values) => {
    localStorage.setItem("USERNAME_TO_CONFIRM", values.email);
    dispatch(forgotPassword(values.email))
      .then((data) => {
        toast.success(data?.payload);
        setResetNew(true);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <button className=" btn-primary1" onClick={handleShow}>
        SIGN IN
      </button>

      {isopen ? (
        <Dialog
          fullWidth={true}
          maxWidth="lg"
          id="popupDialog"
          open={isopen}
          onClose={handleforgotclose}
          scroll={"body"}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogContent class="popup">
            <div class="flex-row exit-button">
              <IconButton
                className={"float-end p-0"}
                color="inherit"
                onClick={handleforgotclose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div className="flex-row">
              <div className="popup-img"></div>

              {resetNew ? (
                <div className="popup-content">
                  <div>
                    <h2>Reset password</h2>
                    <p>
                      If an account exists for the provided address you'll
                      receive an email with a reset code soon
                    </p>
                    <Formik
                      initialValues={initialResetNew}
                      validationSchema={resetPasswordSchema}
                      onSubmit={handleNewReserSubmit}
                    >
                      {({ errors, touched, isValidating }) => (
                        <Form className={"mt-5"}>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <Field
                                  name="email"
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      className={`form-control`}
                                      disabled={true}
                                      type="text"
                                      placeholder="Email address"
                                    />
                                  )}
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <Field
                                  type={"password"}
                                  name="password"
                                  placeholder="New password"
                                  className={`form-control ${
                                    touched.password && errors.password
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                />
                                <ErrorMessage
                                  component="div"
                                  name="password"
                                  className="invalid-feedback"
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-1">
                              <div className="form-group">
                                <Field
                                  name="code"
                                  placeholder="Code"
                                  className={`form-control ${
                                    touched.code && errors.code
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                />
                                <ErrorMessage
                                  component="div"
                                  name="code"
                                  className="invalid-feedback"
                                />
                              </div>
                            </div>
                            {!sending ? (
                              <button
                                onClick={resend}
                                style={{ cursor: "pointer" }}
                                id="resend-code"
                                className="greenLinkBtn mb-5"
                              >
                                {!sending ? "Resend Code" : "Sending ..."}
                              </button>
                            ) : (
                              "Sending ..."
                            )}

                            <div className="col-md-12">
                              {loading ? (
                                <LoadingButton
                                  endIcon={<SendIcon />}
                                  className="mb-3 w-100"
                                  loading
                                  loadingPosition="end"
                                  variant="contained"
                                >
                                  LOADING...
                                </LoadingButton>
                              ) : (
                                <button
                                  type="submit"
                                  className="btn btn-primary mb-3 w-100 m-0"
                                >
                                  RESET PASSWORD
                                </button>
                              )}
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              ) : (
                <div className="popup-content">
                  <h2>Password Reset</h2>
                  <p>
                    Submit your account email below to recive a code you can
                    then use to reset your password
                  </p>
                  <Formik
                    initialValues={initialValue1}
                    validationSchema={forgotPasswordSchema}
                    onSubmit={handleSubmit1}
                  >
                    {({ errors, touched, isValidating }) => (
                      <Form className={"mt-3"}>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <Field
                                name="email"
                                placeholder="Email address"
                                className={`form-control ${
                                  touched.email && errors.email
                                    ? "is-invalid"
                                    : ""
                                }`}
                              />
                              <ErrorMessage
                                component="div"
                                name="email"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="btn btn-primary mb-3 w-100 m-0"
                            >
                              SEND RESET CODE
                            </button>
                          </div>

                          <div
                            style={{
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            <div
                              style={{
                                cursor: "pointer",
                                alignItems: "center",
                                display: "flex",
                              }}
                              className="greenLinkBtn"
                              onClick={handleShow}
                            >
                              <KeyboardArrowLeft />
                              <span>Back to Login</span>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog
          fullWidth={true}
          maxWidth="lg"
          id="popupDialog"
          open={show}
          scroll={"body"}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogContent className="popup">
            <div className="flex-row exit-button">
              <IconButton
                className={"float-end p-0"}
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div className="flex-row">
              <div className="popup-img"></div>
              <div className="popup-content">
                <h2 className="mb-5">Welcome Back!</h2>
                <Formik
                  initialValues={initialValue}
                  validationSchema={SignInSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched, handleSubmit }) => (
                    <Form
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    >
                      <div className="row">
                        <b>Email</b>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <Field
                              name="email"
                              placeholder="Email address"
                              className={`form-control ${
                                touched.email && errors.email
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="email"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <b>Password</b>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <Field
                              type="password"
                              name="password"
                              placeholder="Password"
                              className={`form-control ${
                                touched.password && errors.password
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="password"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <button
                          onClick={handleforgotpassword}
                          type="button"
                          style={{ cursor: "pointer" }}
                          id="forgot-pass"
                          className="greenLinkBtn"
                        >
                          Forgot password?
                        </button>
                        <div className="col-md-12">
                          {loading ? (
                            <LoadingButton
                              endIcon={<SendIcon />}
                              className="mb-3 w-100"
                              loading
                              loadingPosition="end"
                              variant="contained"
                            >
                              LOADING..
                            </LoadingButton>
                          ) : (
                            <button
                              type="submit"
                              className="btn btn-primary mt-5 mb-4 w-100"
                            >
                              SIGN IN
                            </button>
                          )}
                        </div>
                        {/* {message && message === "Email is not verified" && ( */}
                        {/* <div className="form-group">
                      <div className={"alert alert-danger"} role="alert">
                        To verify your email{" "}
                        <a
                          // onClick={openVerifyModal}
                          style={{ cursor: "pointer" }}
                          className="text-decoration-underline"
                        >
                          {" "}
                          click here
                        </a>
                      </div>
                    </div> */}
                        {/* )} */}
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default SignIn;
