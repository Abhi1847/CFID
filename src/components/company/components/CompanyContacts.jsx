import React, { useState } from "react";
import CommonForm from "./CommonForm";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { previousstep } from "../../../store/reducers";

function CompanyContacts() {
  const [contacts, setContacts] = useState([
    {
      firstName: "",
      lastName: "",
      title: "",
      fax: "",
      email: "",
      workPhone: "",
      cellPhone: "",
      homePhone: "",
    },
  ]);
  const dispatch = useDispatch();

  const handleChange = (index, field, value) => {
    const newContacts = [...contacts];
    newContacts[index][field] = value;
    setContacts(newContacts);
  };

  const addContact = () => {
    setContacts([
      ...contacts,
      {
        firstName: "",
        lastName: "",
        title: "",
        fax: "",
        email: "",
        workPhone: "",
        cellPhone: "",
        homePhone: "",
      },
    ]);
  };

  return (
    <>
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="my-3  p-3 rounded"
          style={{ border: "2px solid #d4d4d4" }}
        >
          <Typography
            style={{ fontSize: "1.2em", color: "black", marginBottom: "0.5em" }}
          >
            Company Contact
          </Typography>
          <div style={{ border: "2px solid gray", padding: "1em" }}>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label htmlFor={`firstName-${index}`} className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`firstName-${index}`}
                  value={contact.firstName}
                  placeholder="Enter first name"
                  onChange={(e) =>
                    handleChange(index, "firstName", e.target.value)
                  }
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor={`lastName-${index}`} className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`lastName-${index}`}
                  value={contact.lastName}
                  placeholder="Enter last name"
                  onChange={(e) =>
                    handleChange(index, "lastName", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label htmlFor={`title-${index}`} className="form-label">
                  Position/Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`title-${index}`}
                  value={contact.title}
                  placeholder="Enter position or title"
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor={`fax-${index}`} className="form-label">
                  FAX
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`fax-${index}`}
                  value={contact.fax}
                  placeholder="Enter fax number"
                  onChange={(e) => handleChange(index, "fax", e.target.value)}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label htmlFor={`email-${index}`} className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id={`email-${index}`}
                  value={contact.email}
                  placeholder="Enter email address"
                  onChange={(e) => handleChange(index, "email", e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor={`workPhone-${index}`} className="form-label">
                  Work Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`workPhone-${index}`}
                  value={contact.workPhone}
                  placeholder="Enter work phone number"
                  onChange={(e) =>
                    handleChange(index, "workPhone", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12 col-md-6">
                <label htmlFor={`cellPhone-${index}`} className="form-label">
                  Cell Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`cellPhone-${index}`}
                  value={contact.cellPhone}
                  placeholder="Enter cell phone number"
                  onChange={(e) =>
                    handleChange(index, "cellPhone", e.target.value)
                  }
                />
              </div>
              <div className="col-12 col-md-6">
                <label htmlFor={`homePhone-${index}`} className="form-label">
                  Home Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`homePhone-${index}`}
                  value={contact.homePhone}
                  placeholder="Enter home phone number"
                  onChange={(e) =>
                    handleChange(index, "homePhone", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
          <div className="d-flex ">
            <Typography
              onClick={addContact}
              style={{ marginTop: "1em", color: "#4A5E00", fontWeight: "bold" }}
            >
              ADD NEW CONTACT+
            </Typography>
          </div>
        </div>
      ))}
      <div
        className="d-flex justify-content-end"
        style={{ margin: "2em 0em 6em 0em", alignItems: "center" }}
      >
        <Typography
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
        <button type="button" className="btn btn-primary2">
          FINISH
        </button>
      </div>
    </>
  );
}

export default CompanyContacts;
