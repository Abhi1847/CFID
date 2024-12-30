import React, { useState } from "react";
import CommonForm from "./CommonForm";
import { Typography } from "@mui/material";
import { nextstep, previousstep } from "../../../store/reducers";
import { useDispatch } from "react-redux";

function Residue({ data }) {
  const [selectedResidue, setSelectedResidue] = useState([]);
  const dispatch = useDispatch();

  const residueOptions = data.residue;
  //  [
  //   { value: "residue1", label: "Residue 1" },
  //   { value: "residue2", label: "Residue 2" },
  //   { value: "residue3", label: "Residue 3" },
  //   { value: "residue4", label: "Residue 4" },
  //   { value: "residue5", label: "Residue 5" },
  // ];

  const handleCheckboxChange = (value) => {
    setSelectedResidue((prev) =>
      prev.includes(value)
        ? prev.filter((residue) => residue !== value)
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
            Company Residue
          </Typography>
          <div className="col-12 col-md-6">
            <label htmlFor="residue" className="form-label">
              Residue
            </label>
            <div className="dropdown">
              <button
                className="form-control"
                type="button"
                id="residueDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textAlign: "left" }}
              >
                {selectedResidue.length > 0
                  ? selectedResidue.join(", ")
                  : "Select Residue"}
              </button>
              <ul
                className="dropdown-menu pl-2"
                aria-labelledby="residueDropdown"
                style={{ width: "-webkit-fill-available" }}
              >
                {residueOptions.map((residue, index) => (
                  <li key={index} className="px-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={index}
                        value={residue}
                        checked={selectedResidue.includes(residue)}
                        onChange={() => handleCheckboxChange(residue)}
                      />
                      <label className="form-check-label" htmlFor={residue}>
                        {residue}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
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

export default Residue;
