import React, { useState } from "react";
import CommonForm from "./CommonForm";
import { Typography } from "@mui/material";
import { nextstep, previousstep } from "../../../store/reducers";
import { useDispatch } from "react-redux";

function Certifications({ data }) {
  const [selectedCertifications, setSelectedCertifications] = useState([]);
  const dispatch = useDispatch();

  const certificationOptions = data.certifications;

  // [
  //   { value: "sfi", label: "Sustainable Forestry Initiative (SFI)" },
  //   { value: "fsc", label: "Forest Stewardship Council (FSC)" },
  //   { value: "atfs", label: "American Tree Farm System (ATFS)" },
  //   {
  //     value: "oregonTilth",
  //     label: "California Tilth (Certifying Organization)",
  //   },
  //   { value: "usdaOrganic", label: "USDA Organic" },
  // ];

  const handleCheckboxChange = (value) => {
    setSelectedCertifications((prev) =>
      prev.includes(value)
        ? prev.filter((cert) => cert !== value)
        : [...prev, value]
    );
  };

  return (
    <form>
      <div className="container text-start p-3">
        <div className="row mb-2">
          <Typography
            style={{ fontSize: "1.2em", color: "black", marginBottom: "0.5em" }}
          >
            Company Certification
          </Typography>
          <div className="col-12">
            <div className="d-flex flex-wrap flex-column">
              {certificationOptions.map((certification, index) => (
                <div
                  key={index}
                  className="form-check"
                  style={{
                    width: "30%", // Each checkbox takes up one-third of the row
                    minWidth: "150px", // Ensures a minimum width for smaller screens
                    marginBottom: "1rem", // Spacing between rows
                  }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={index}
                    value={certification}
                    checked={selectedCertifications.includes(certification)}
                    onChange={() => handleCheckboxChange(certification)}
                  />
                  <label className="form-check-label" htmlFor={certification}>
                    {certification}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-end"
        style={{ margin: "2em 0em 6em 0em", alignItems: "center" }}
      >
        <Typography
          className="sav-btn"
          style={{
            color: " #4A5E00",
            fontWeight: "bold",
            marginRight: "1em",
          }}
        >
          SAVE & EXIT
        </Typography>
        <button
          type="submit"
          className="btn-outline-dark1"
          style={{ padding: "0em 1em" }}
          onClick={() => dispatch(previousstep())}
        >
          BACK
        </button>
        <button
          type="button"
          className="btn btn-primary2"
          onClick={() => dispatch(nextstep())}
        >
          NEXT STEP
        </button>
      </div>
    </form>
  );
}

export default Certifications;
