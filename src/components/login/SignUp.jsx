import React, { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import "./signin.css";
import {
  login,
  register,
  reSendVerificationCode,
  showSuccessModel,
} from "../../store/reducers";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { verifyemail } from "../../store/reducers";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

function SignUp() {
  const [show, setShow] = useState(false);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [sending, setSending] = useState(false);

  const handleClose = () => {
    setShow(false);
    setVerifyEmail(false);
  };
  const handleShow = () => setShow(true);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const lengthRegex = /^(?=.{8,})/;
  const lowerCaseRegex = /^(?=.*[a-z])/;
  const upperCaseRegex = /^(?=.*[A-Z])/;
  const specialCharacterRegex = /^(?=.*[!@#\$%\^&\*])/;
  const numberRegex = /^(?=.{6,20}$)\D*\d/;

  const initialValue = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const signUpSchema = Yup.object().shape({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email address format")
      .required("Required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(lengthRegex, "Must Contain 8 Characters")
      .matches(lowerCaseRegex, "Must Contain One Lowercase")
      .matches(upperCaseRegex, "Must Contain One Uppercase")
      .matches(specialCharacterRegex, "Must Contain One Special Case Character")
      .matches(numberRegex, "Must Contain One Number"),
  });

  const handleSubmit = (values) => {
    let param = values;
    setemail(values.email);
    setpassword(values.password);
    param["type"] = "landowner";

    setLoading(true);

    dispatch(register(param))
      .then((response) => {
        setLoading(false);
        if (response.meta.requestStatus === "fulfilled") {
          setVerifyEmail(true);
          toast.success(response);
        }
        toast.success(response.payload);
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error?.payload;
        toast.error(errorMessage);
      });
  };

  const [verifyEmail, setVerifyEmail] = useState(false);

  const verifyEmailSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Required"),
    code: Yup.string().required("Required"),
  });

  const initialValue1 = {
    email: localStorage.getItem("USERNAME_TO_CONFIRM"),
    code: "",
  };

  const handleSubmit1 = (values) => {
    const paylod = {
      email: values.email,
      code: values.code,
    };
    setSending(true);
    dispatch(verifyemail(paylod))
      .then(() => {
        const payload = {
          email: localStorage.getItem("USERNAME_TO_CONFIRM"),
          password: localStorage.getItem("PASSWORD_TO_CONFIRM"),
        };

        dispatch(login(payload)).then((data) => {
          localStorage.removeItem("USERNAME_TO_CONFIRM");
          localStorage.removeItem("PASSWORD_TO_CONFIRM");
          if (data?.payload?.access_token) {
            toast.success("Login successfully!");
            dispatch(showSuccessModel());
            setSending(false);
            navigate("/dashboard");
          } else {
            toast.error(data?.payload?.message || "Login failed");
          }
        });
      })
      .catch((error) => {
        setSending(false);
      });
  };

  const resend = () => {
    setSending(true);
    dispatch(
      reSendVerificationCode(localStorage.getItem("USERNAME_TO_CONFIRM"))
    )
      .then(() => {
        setSending(false);
      })
      .catch(() => {
        setSending(false);
      });
  };

  return (
    <div>
      <button onClick={handleShow} className="btn-outline-dark">
        SIGN UP
      </button>

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

            {!verifyEmail ? (
              <div className="popup-content">
                <h2 className="mb-5">Welcome Back!</h2>
                <Formik
                  initialValues={initialValue}
                  validationSchema={signUpSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched, isValidating, values }) => (
                    <Form>
                      <div className="row">
                        <b className="register_form_label">Name</b>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <Field
                              name="first_name"
                              placeholder="First name"
                              className={`form-control ${
                                touched.first_name && errors.first_name
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="first_name"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <Field
                              name="last_name"
                              placeholder="Last name"
                              className={`form-control ${
                                touched.last_name && errors.last_name
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="last_name"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <b className="register_form_label">Email</b>
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
                      </div>
                      <div className="row">
                        <b className="register_form_label">Password</b>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <Field
                              type={showPassword ? "text" : "password"}
                              name="password"
                              value={password}
                              placeholder="Password"
                              className={`form-control ${
                                touched.password && errors.password
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <i
                              className={`fa ${
                                !showPassword ? "fa-eye" : "fa-eye-slash"
                              } fa-lg password_eye`}
                              onClick={() => setShowPassword(!showPassword)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row pass-requirements">
                        <div className="col-md-6">
                          <ul>
                            <>
                              <li
                                style={{ fontSize: "12px" }}
                                className={`${
                                  !lengthRegex.test(values.password)
                                    ? touched.password && errors.password
                                      ? "password_error"
                                      : ""
                                    : "password_success"
                                }`}
                              >
                                At least 8 Characters
                              </li>
                              <li
                                style={{ fontSize: "12px" }}
                                className={`${
                                  !upperCaseRegex.test(values.password) ||
                                  !lowerCaseRegex.test(values.password)
                                    ? touched.password && errors.password
                                      ? "password_error"
                                      : ""
                                    : "password_success"
                                }`}
                              >
                                Upper & lower case
                              </li>
                            </>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <>
                              <li
                                style={{ fontSize: "12px" }}
                                className={`${
                                  !specialCharacterRegex.test(values.password)
                                    ? touched.password && errors.password
                                      ? "password_error"
                                      : ""
                                    : "password_success"
                                }`}
                              >
                                Special character
                              </li>
                              <li
                                style={{ fontSize: "12px" }}
                                className={`${
                                  !numberRegex.test(values.password)
                                    ? touched.password && errors.password
                                      ? "password_error"
                                      : ""
                                    : "password_success"
                                }`}
                              >
                                At least one number
                              </li>
                            </>
                          </ul>
                        </div>
                      </div>
                      <div className="row">
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
                              className="btn btn-primary mb-3 w-100"
                            >
                              COMPLETE SIGN UP
                            </button>
                          )}
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            ) : (
              <div className="popup-content">
                <h4>
                  Verify email
                  {/* <IconButton
                    className={"float-end"}
                    color="inherit"
                    // onClick={close}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton> */}
                </h4>
                <small>( Check you mail box for code )</small>
                <Formik
                  initialValues={initialValue1}
                  validationSchema={verifyEmailSchema}
                  onSubmit={handleSubmit1}
                >
                  {({ errors, touched, isValidating, values }) => (
                    <Form className={"mt-5"}>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <Field
                              name="email"
                              value={email}
                              className="form-control"
                              disabled={true}
                              type="text"
                              placeholder="Email address"
                            ></Field>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <Field
                              name="code"
                              placeholder="Code"
                              className={`form-control ${
                                touched.code && errors.code ? "is-invalid" : ""
                              }`}
                            />
                            <ErrorMessage
                              component="div"
                              name="code"
                              className="invalid-feedback"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          {sending ? (
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
                              className="btn btn-primary mb-3 w-100"
                              style={{ margin: "0" }}
                            >
                              SUBMIT
                            </button>
                          )}
                          {!sending ? (
                            <a
                              onClick={resend}
                              style={{ cursor: "pointer" }}
                              className="text-decoration-underline"
                            >
                              {!sending ? "Resend" : "Sending ..."}
                            </a>
                          ) : (
                            "Sending ..."
                          )}
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
    </div>
  );
}

export default SignUp;
