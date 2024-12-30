import React, { useState } from "react";
import CommonForm from "./CommonForm";
import { Typography } from "@mui/material";
import { nextstep, previousstep } from "../../../store/reducers";
import { useDispatch } from "react-redux";

function Equipment({ data }) {
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const dispatch = useDispatch();

  const equipmentOptions = data.equipments;
  // [
  //   { value: "equipment1", label: "Equipment 1" },
  //   { value: "equipment2", label: "Equipment 2" },
  //   { value: "equipment3", label: "Equipment 3" },
  //   { value: "equipment4", label: "Equipment 4" },
  //   { value: "equipment5", label: "Equipment 5" },
  // ];

  const handleCheckboxChange = (value) => {
    setSelectedEquipment((prev) =>
      prev.includes(value)
        ? prev.filter((equipment) => equipment !== value)
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
            Company Equipment
          </Typography>
          <div className="col-12 col-md-6">
            <label htmlFor="equipment" className="form-label">
              Equipment
            </label>
            <div className="dropdown">
              <button
                className="form-control"
                type="button"
                id="equipmentDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textAlign: "left" }}
              >
                {selectedEquipment.length > 0
                  ? selectedEquipment.join(", ")
                  : "Select Equipment"}
              </button>
              <ul
                className="dropdown-menu pl-2"
                aria-labelledby="equipmentDropdown"
                style={{ width: "-webkit-fill-available" }}
              >
                {equipmentOptions.map((equipment, index) => (
                  <li key={index} className="px-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={index}
                        value={equipment}
                        checked={selectedEquipment.includes(equipment)}
                        onChange={() => handleCheckboxChange(equipment)}
                      />
                      <label className="form-check-label" htmlFor={equipment}>
                        {equipment}
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
          className="btn-outline-dark1 .btn-out"
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

export default Equipment;
