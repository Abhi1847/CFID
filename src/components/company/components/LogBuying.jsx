import React, { useState } from "react";
import CommonForm from "./CommonForm";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { nextstep, previousstep } from "../../../store/reducers";

function CompanyInfo() {
  const [selectedCounties, setSelectedCounties] = useState([]);
  const [acceptsBigLogs, setAcceptsBigLogs] = useState(false);
  const [minDiameter, setMinDiameter] = useState("");
  const [maxDiameter, setMaxDiameter] = useState("");
  const [diameterPreference, setDiameterPreference] = useState("");
  const [minLength, setMinLength] = useState("");
  const [maxLength, setMaxLength] = useState("");
  const [lengthPreference, setLengthPreference] = useState("");
  const [annualProduction, setAnnualProduction] = useState("");
  const [notes, setNotes] = useState("");
  const dispatch = useDispatch();

  const handleCheckboxChange = (value) => {
    setSelectedCounties((prev) =>
      prev.includes(value)
        ? prev.filter((county) => county !== value)
        : [...prev, value]
    );
  };

  return (
    <form>
      <div className="container text-start p-3">
        <Typography
          style={{ fontSize: "1.2em", color: "black", marginBottom: "0.5em" }}
        >
          Log Buying Preferences
        </Typography>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="acceptsBigLogs"
            checked={acceptsBigLogs}
            onChange={(e) => setAcceptsBigLogs(e.target.checked)}
          />
          <label htmlFor="acceptsBigLogs" className="form-check-label">
            Accepts Big Logs
          </label>
        </div>

        <div className="row mb-2">
          <div className="col-12 col-md-6">
            <label htmlFor="minDiameter" className="form-label">
              Minimum Diameter
            </label>
            <input
              type="number"
              className="form-control"
              id="minDiameter"
              value={minDiameter}
              onChange={(e) => setMinDiameter(e.target.value)}
              placeholder="Enter minimum diameter"
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="maxDiameter" className="form-label">
              Maximum Diameter
            </label>
            <input
              type="number"
              className="form-control"
              id="maxDiameter"
              value={maxDiameter}
              onChange={(e) => setMaxDiameter(e.target.value)}
              placeholder="Enter maximum diameter"
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-12 col-md-6">
            <label htmlFor="diameterPreference" className="form-label">
              Diameter Preference
            </label>
            <input
              type="text"
              className="form-control"
              id="diameterPreference"
              value={diameterPreference}
              onChange={(e) => setDiameterPreference(e.target.value)}
              placeholder="Enter diameter preference"
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="minLength" className="form-label">
              Minimum Length
            </label>
            <input
              type="number"
              className="form-control"
              id="minLength"
              value={minLength}
              onChange={(e) => setMinLength(e.target.value)}
              placeholder="Enter minimum length"
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-12 col-md-6">
            <label htmlFor="maxLength" className="form-label">
              Maximum Length
            </label>
            <input
              type="number"
              className="form-control"
              id="maxLength"
              value={maxLength}
              onChange={(e) => setMaxLength(e.target.value)}
              placeholder="Enter maximum length"
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="lengthPreference" className="form-label">
              Length Preference
            </label>
            <input
              type="text"
              className="form-control"
              id="lengthPreference"
              value={lengthPreference}
              onChange={(e) => setLengthPreference(e.target.value)}
              placeholder="Enter length preference"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <label htmlFor="annualProduction" className="form-label">
              Annual Production (MBF)
            </label>
            <input
              type="number"
              className="form-control"
              id="annualProduction"
              value={annualProduction}
              onChange={(e) => setAnnualProduction(e.target.value)}
              placeholder="Enter annual production"
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "1em" }}>
          <div className="col-12 ">
            <label htmlFor="notes" className="form-label">
              Notes
            </label>
            <textarea
              className="form-control"
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter any additional notes"
            />
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

export default CompanyInfo;
