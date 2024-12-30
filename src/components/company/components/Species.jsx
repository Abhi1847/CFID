import React, { useState } from "react";
import CommonForm from "./CommonForm";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { nextstep, previousstep } from "../../../store/reducers";

function Species({ data }) {
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const dispatch = useDispatch();

  const speciesOptions = data.species;

  // [
  //   { value: "species1", label: "Species 1" },
  //   { value: "species2", label: "Species 2" },
  //   { value: "species3", label: "Species 3" },
  //   { value: "species4", label: "Species 4" },
  //   { value: "species5", label: "Species 5" },
  // ];

  const handleCheckboxChange = (value) => {
    setSelectedSpecies((prev) =>
      prev.includes(value)
        ? prev.filter((species) => species !== value)
        : [...prev, value]
    );
  };

  return (
    <form>
      <div
        className="d-flex justify-content-end"
        style={{ color: " #4A5E00", marginBottom: "1em" }}
      >
        <Typography style={{ fontWeight: "bold" }}> SAVE & EXIT</Typography>
      </div>
      <div className="container text-start p-3">
        <div className="row mb-2">
          <Typography
            style={{ fontSize: "1.2em", color: "black", marginBottom: "0.5em" }}
          >
            Company Species
          </Typography>
          <div className="col-12 col-md-6">
            <label htmlFor="species" className="form-label">
              Species
            </label>
            <div className="dropdown">
              <button
                className="form-control"
                type="button"
                id="speciesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textAlign: "left" }}
              >
                {selectedSpecies.length > 0
                  ? selectedSpecies.join(", ")
                  : "Select Species"}
              </button>
              <ul
                className="dropdown-menu pl-2"
                aria-labelledby="speciesDropdown"
                style={{ width: "-webkit-fill-available" }}
              >
                {speciesOptions.map((species, index) => (
                  <li key={index} className="px-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={index}
                        value={species}
                        checked={selectedSpecies.includes(species)}
                        onChange={() => handleCheckboxChange(species)}
                      />
                      <label className="form-check-label" htmlFor={species}>
                        {species}
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
          style={{ color: " #4A5E00", fontWeight: "bold", marginRight: "1em" }}
        >
          MAKE REVISION
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

export default Species;
