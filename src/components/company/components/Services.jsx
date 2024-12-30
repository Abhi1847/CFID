import React, { useState } from "react";
import CommonForm from "./CommonForm";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { nextstep, previousstep } from "../../../store/reducers";

function Services({ data }) {
  const [selectedServices, setSelectedServices] = useState([]);
  const dispatch = useDispatch();
  const serviceOptions = data.services;
  // [
  //   { value: "service1", label: "Service 1" },
  //   { value: "service2", label: "Service 2" },
  //   { value: "service3", label: "Service 3" },
  //   { value: "service4", label: "Service 4" },
  //   { value: "service5", label: "Service 5" },
  // ];

  const handleCheckboxChange = (value) => {
    setSelectedServices((prev) =>
      prev.includes(value)
        ? prev.filter((service) => service !== value)
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
            Company Services
          </Typography>
          <div className="col-12 col-md-6">
            <label htmlFor="services" className="form-label">
              Services
            </label>
            <div className="dropdown">
              <button
                className="form-control"
                type="button"
                id="servicesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textAlign: "left" }}
              >
                {selectedServices.length > 0
                  ? selectedServices.join(", ")
                  : "Select Services"}
              </button>
              <ul
                className="dropdown-menu pl-2"
                aria-labelledby="servicesDropdown"
                style={{ width: "-webkit-fill-available" }}
              >
                {serviceOptions.map((service, index) => (
                  <li key={index} className="px-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={index}
                        value={service}
                        checked={selectedServices.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                      />
                      <label className="form-check-label" htmlFor={service}>
                        {service}
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

export default Services;
