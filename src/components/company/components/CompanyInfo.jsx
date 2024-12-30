import React, { useEffect, useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CommonForm from "./CommonForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { nextstep } from "../../../store/reducers";

function CompanyInfo() {
  const [selectedCounties, setSelectedCounties] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const inputRefs = useRef({});
  const dispatch = useDispatch();

  const counties = [
    { value: "county1", label: "County 1" },
    { value: "county2", label: "County 2" },
    { value: "county3", label: "County 3" },
    { value: "county4", label: "County 4" },
    { value: "county5", label: "County 5" },
  ];

  const handleCheckboxChange = (value) => {
    setSelectedCounties((prev) =>
      prev.includes(value)
        ? prev.filter((county) => county !== value)
        : [...prev, value]
    );
  };

  const formik = useFormik({
    initialValues: {
      companyName: "",
      physicalAddress: "",
      poBox: "",
      city: "",
      state: "",
      otherState: "",
      zipCode: "",
      phone: "",
      website: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Name is required"),
    }),
    onSubmit: (values) => {},
  });

  useEffect(() => {
    if (formik.isSubmitting && Object.keys(formik.errors).length > 0) {
      const firstErrorField = Object.keys(formik.errors)[0];
      inputRefs.current[firstErrorField]?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [formik.isSubmitting, formik.errors]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container text-start p-3">
        <div className="row mb-2">
          <Typography
            style={{ fontSize: "1.2em", color: "black", marginBottom: "0.5em" }}
          >
            Company Information
          </Typography>
          <div className="col-12 col-md-6">
            <b>Name *</b>
            <input
              type="text"
              placeholder="Enter Name"
              className={`form-control ${
                formik.touched.companyName && formik.errors.companyName
                  ? "is-invalid"
                  : ""
              }`}
              id="companyName"
              ref={(el) => (inputRefs.current.companyName = el)} // Set ref for the input
              {...formik.getFieldProps("companyName")}
            />
            {formik.touched.companyName && formik.errors.companyName && (
              <div className="text-danger">{formik.errors.companyName}</div>
            )}
          </div>
          <div className="col-12 col-md-6">
            <b>Physical Address</b>
            <input
              placeholder="Enter Physical Address"
              type="text"
              className="form-control"
              id="physicalAddress"
            />
            <div className="form-text">Street addresses only. No PO Boxes</div>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-12 col-md-6">
            <b>PO Box</b>
            <input
              type="text"
              placeholder="Enter PO Box"
              className="form-control"
              id="poBox"
            />
          </div>
          <div className="col-12 col-md-6">
            <b>City</b>
            <input
              type="text"
              placeholder="Enter City"
              className="form-control"
              id="city"
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-12 col-md-6">
            <b>State</b>
            <select className="form-select form-select-border" id="state">
              <option value="" disabled>
                Select your state
              </option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California </option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <b>Other State</b>
            <input
              type="text"
              placeholder="Enter Other State"
              className="form-control"
              id="otherState"
            />
            <div className="form-text">
              Select Other state field when entering data in this field.
            </div>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-12 col-md-6">
            <b>Zip Code</b>
            <input
              type="text"
              placeholder="Enter Zip Code"
              className="form-control"
              id="zipCode"
            />
          </div>
          <div className="col-12 col-md-6">
            <b>County</b>
            <div className="dropdown">
              <button
                className="form-control"
                type="button"
                id="countyDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textAlign: "left" }}
              >
                {selectedCounties.length > 0
                  ? selectedCounties.join(", ")
                  : "Select Counties"}
              </button>
              <ul
                className="dropdown-menu pl-2"
                aria-labelledby="countyDropdown"
                style={{ width: "-webkit-fill-available" }}
              >
                {counties.map((county) => (
                  <li key={county.value} className="px-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={county.value}
                        value={county.value}
                        checked={selectedCounties.includes(county.value)}
                        onChange={() => handleCheckboxChange(county.value)}
                      />
                      <b>{county.label}</b>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-12 col-md-6">
            <b>Phone</b>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="form-control"
              id="phone"
            />
            <div className="form-text">For US numbers: (###) ###-####</div>
          </div>
          <div className="col-12 col-md-6">
            <b>Website</b>
            <input
              type="url"
              placeholder="Enter Website URL"
              className="form-control"
              id="website"
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-12">
            <b>Additional Information</b>
            <CKEditor
              editor={ClassicEditor}
              data={additionalInfo}
              onChange={(event, editor) => {
                const data = editor.getData();
                setAdditionalInfo(data);
              }}
            />
          </div>
        </div>

        <CommonForm />
      </div>
      <div
        className="d-flex justify-content-end"
        style={{ margin: "2em 0em 6em 0em" }}
      >
        <button type="submit" className="btn-outline-dark1">
          CANCLE
        </button>
        <button
          type="button"
          className=" btn-primary2"
          onClick={() => dispatch(nextstep())}
        >
          NEXT STEP
        </button>
      </div>
    </form>
  );
}

export default CompanyInfo;
