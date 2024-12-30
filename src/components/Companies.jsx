import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { MenuItem, FormControl } from "@mui/material";
import Select from "@mui/material/Select";
import { Avatar, CardActionArea } from "@mui/material";
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa6";
import certi1 from "../assets/certificate1.png";
import certi2 from "../assets/OTCO-color-lg_transparent.png";
import certi3 from "../assets/Group.png";
import certi4 from "../assets/Organic4colorsealGIF.png";
import certi5 from "../assets/218_logo4_3-col_1_348x268@2x 1.png";

function Companies() {
  const [short, setShort] = useState("distance");
  const [click, setclick] = useState(false);

  const handleChange = (event) => {
    setShort(event.target.value);
  };
  const handledata = () => {
    console.log("click");
    setclick(true);
  };
  const handleclose = () => {
    setclick(false);
  };
  return (
    <>
      {click ? (
        <>
          <img
            src="/img/alex-jones-bBKVrH0vzB4-unsplash 1.jpg"
            alt=""
            style={{ height: "20em", width: "100%" }}
          />
          <div
            style={{
              marginLeft: "7em",
              marginTop: "0.5em",
              color: "#A5BF45",
            }}
          >
            <Typography onClick={handleclose} style={{ cursor: "pointer" }}>
              <FaAngleLeft />
              Back
            </Typography>
            <h4 style={{ margin: "1em 0em", fontWeight: "bold" }}>
              Company Name
            </h4>
          </div>
          <div>
            <div className="d-flex" style={{ width: "85%", margin: "auto" }}>
              <div style={{ width: "50%" }}>
                <Typography>
                  123 Street, Los Angeles, California 90001 <br></br>
                  (123)-456-7890 <br></br>companywebsite.com <br></br>
                  <br></br>Migration Prep Utility Details written out here.
                  Migration Prep Utility Details written out here. Migration
                  Prep Utility Details written out here. Migration Prep Utility
                  Details written out here. Migration Prep Utility Details
                  written out here. Migration Prep Utility Details written out
                  here. Migration Prep Utility Details written out here.
                  Migration Prep Utility Details written out here. Migration
                  Prep Utility Details written out here.{" "}
                </Typography>
                <Typography>
                  <br></br>
                  <b> Produces:</b> Product 1, Product 2, Product 4, Product 6
                  <br></br>
                  <b> Purchases:</b> Product 2, Product 4, Product 5, Product 6
                  <br></br>
                  <b>Species:</b> Species 1, Species 2, Species 3, Species 4,
                  Species 5<br></br>
                  <b>Equipment:</b> Equipment 3, Equipment 4, Equipment 5
                  <br></br>
                  <br></br> <b>Log Buying Preferences</b> <br></br>
                  <b>Accepts Big Logs:</b>
                  Yes<br></br>
                  <b> Minimum Diameter:</b> 3 <br></br>
                  <b>Maximum Diameter:</b> 3<br></br>
                  <b>Diameter Preference:</b> 3-5 <br></br>
                  <b>Minimum Length:</b> 5<br></br>
                  <b>Maximum Length:</b> 5<br></br> <b>Length Preference:</b>{" "}
                  5-7
                  <br></br>
                  <b>Annual Production:</b> 10 <br></br>
                  <b>Residue:</b> Residue 1, Residue 3, Residue 5<br></br>{" "}
                  <b>Services:</b> Service 2, Service 4, Service 6
                </Typography>
              </div>
              <div style={{ width: "35%", marginLeft: "4em" }}>
                <div>
                  <Typography>Certified By: </Typography>
                  <div
                    className="d-flex"
                    style={{
                      width: "100%",
                      margin: "auto",
                      marginTop: "1em",
                      border: "1px solid gray",
                      borderRadius: "0.5em",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img
                        src={certi1}
                        alt=""
                        style={{ margin: "0.5em", height: "3em", width: "3em" }}
                      />
                    </div>
                    <div>
                      <Typography
                        className="d-flex"
                        style={{ marginLeft: "1em" }}
                      >
                        American Tree Farm System (ATFS)
                      </Typography>
                    </div>
                  </div>
                  <div
                    className="d-flex"
                    style={{
                      width: "100%",
                      margin: "auto",
                      marginTop: "1em",
                      border: "1px solid gray",
                      borderRadius: "0.5em",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img
                        src={certi2}
                        alt=""
                        style={{ margin: "0.5em", height: "3em", width: "3em" }}
                      />
                    </div>
                    <div>
                      <Typography
                        className="d-flex"
                        style={{ marginLeft: "1em" }}
                      >
                        California Tilth (Certifying Organization) - WRONG LOGO
                      </Typography>
                    </div>
                  </div>
                  <div
                    className="d-flex"
                    style={{
                      width: "100%",
                      margin: "auto",
                      marginTop: "1em",
                      border: "1px solid gray",
                      borderRadius: "0.5em",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img
                        src={certi3}
                        alt=""
                        style={{ margin: "0.5em", height: "3em", width: "3em" }}
                      />
                    </div>
                    <div>
                      <Typography
                        className="d-flex"
                        style={{ marginLeft: "1em" }}
                      >
                        Sustainable Forestry Initiative (SFI)
                      </Typography>
                    </div>
                  </div>
                  <div
                    className="d-flex"
                    style={{
                      width: "100%",
                      margin: "auto",
                      marginTop: "1em",
                      border: "1px solid gray",
                      borderRadius: "0.5em",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img
                        src={certi4}
                        alt=""
                        style={{ margin: "0.5em", height: "3em", width: "3em" }}
                      />
                    </div>
                    <div>
                      <Typography
                        className="d-flex"
                        style={{ marginLeft: "1em" }}
                      >
                        USDA Organic
                      </Typography>
                    </div>
                  </div>
                  <div
                    className="d-flex"
                    style={{
                      width: "100%",
                      margin: "auto",
                      marginTop: "1em",
                      border: "1px solid gray",
                      borderRadius: "0.5em",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img
                        src={certi5}
                        alt=""
                        style={{ margin: "0.5em", height: "3em", width: "3em" }}
                      />
                    </div>
                    <div>
                      <Typography
                        className="d-flex"
                        style={{ marginLeft: "1em" }}
                      >
                        Forest Stewardship Council (FSC)
                      </Typography>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "2em" }}>
                  <Typography>Company Contacts: </Typography>
                  <div
                    className="d-flex"
                    style={{
                      width: "100%",
                      margin: "auto",
                      marginTop: "1em",
                      border: "1px solid gray",
                      borderRadius: "0.5em",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ margin: "1em" }}>
                      <Typography>
                        Natalie Sanchez <br />
                        Position Title
                      </Typography>
                    </div>
                    <div style={{ margin: "1em" }}>
                      <Typography>
                        natalie.sanchez@company.com
                        <br /> Work Phone: (123) 456-7890
                        <br />
                        Cell Phone: (123) 456-7890
                        <br /> FAX: +1-212-555-1234
                      </Typography>
                    </div>
                  </div>
                  <div
                    className="d-flex"
                    style={{
                      width: "100%",
                      margin: "auto",
                      marginTop: "1em",
                      border: "1px solid gray",
                      borderRadius: "0.5em",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ margin: "1em" }}>
                      <Typography>
                        Natalie Sanchez <br />
                        Position Title
                      </Typography>
                    </div>
                    <div style={{ margin: "1em" }}>
                      <Typography>
                        natalie.sanchez@company.com
                        <br /> Work Phone: (123) 456-7890
                        <br />
                        Cell Phone: (123) 456-7890
                        <br /> FAX: +1-212-555-1234
                      </Typography>
                    </div>
                  </div>
                  <div
                    className="d-flex"
                    style={{
                      width: "100%",
                      margin: "auto",
                      marginTop: "1em",
                      marginBottom: "3em",
                      border: "1px solid gray",
                      borderRadius: "0.5em",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ margin: "1em" }}>
                      <Typography>
                        Natalie Sanchez <br />
                        Position Title
                      </Typography>
                    </div>
                    <div style={{ margin: "1em" }}>
                      <Typography>
                        natalie.sanchez@company.com
                        <br /> Work Phone: (123) 456-7890
                        <br />
                        Cell Phone: (123) 456-7890
                        <br /> FAX: +1-212-555-1234
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div style={{ margin: "1em 2.2em 1em 3em" }} className="com-div">
            <div className="d-flex justify-content-between rpf-title com">
              <div style={{ alignContent: "center" }}>
                <h4 style={{ margin: "1em 0em" }}>Companies </h4>
              </div>
              <div>
                {/* {invitestatus === "invite" && ( */}
                <div className="d-flex mob-search">
                  <div className="d-flex m-2 com-1">
                    <div className="d-flex com-sort">
                      <div
                        className="d-flex"
                        style={{
                          height: "2.3em",
                          border: "2px solid lightgray",
                          width: "2em",
                          marginRight: "0.5em",
                        }}
                      >
                        <p
                          className="d-flex"
                          style={{
                            alignItems: "center",
                            margin: "auto",
                            fontWeight: "460",
                          }}
                        >
                          3
                        </p>
                      </div>
                      <div
                        className="d-flex"
                        style={{
                          height: "2em",
                          marginRight: "0.5em",
                        }}
                      >
                        <p
                          className="d-flex"
                          style={{
                            alignItems: "center",
                            margin: "auto",
                            fontWeight: "460",
                          }}
                        >
                          Rows per page
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div
                        className="d-flex "
                        style={{
                          border: "2px solid lightgray",
                          borderRight: "none",
                          height: "2.3em",
                        }}
                      >
                        <p
                          className="d-flex"
                          style={{
                            margin: "5px",
                            alignItems: "center",
                            fontWeight: "500",
                          }}
                        >
                          Sort By
                        </p>
                      </div>
                      <FormControl
                        className="mob-sort"
                        sx={{
                          width: "12em",
                          border: " 2px solid lightgray",
                          height: "2.3em",
                          padding: "0.3em !important",
                        }}
                      >
                        <Select
                          id="demo-simple-select"
                          value={short} // default selected value
                          onChange={handleChange}
                          displayEmpty // this ensures the placeholder is visible when no value is selected
                          sx={{
                            "& fieldset": {
                              border: "none",
                            },
                            "& .MuiSelect-select": {
                              padding: "0px",
                            },
                          }}
                        >
                          <MenuItem value={"distance"}>Distance</MenuItem>
                          <MenuItem value={"company"}>Company Name</MenuItem>
                          <MenuItem value={"rpf"}>RPF Name</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 row card d-flex flex-row main-com"
            style={{ border: "none", marginLeft: "1em", marginTop: "1em" }}
          >
            <div
              className="col-12 col-md-4 inner-card p-0 card-com"
              style={{
                border: "2px solid lightgray",
                width: "30%",
              }}
              // key={record.id}
              onClick={handledata}
            >
              <CardActionArea>
                <div className="d-flex section-1 flex-column">
                  <div
                    className="card-img"
                    style={{ height: "7em", backgroundColor: "lightgray" }}
                  >
                    <Avatar src="/broken-image.jpg" />
                  </div>
                  <div style={{ padding: "0.7rem" }}>
                    <div>
                      <span style={{ fontSize: "20px", fontWeight: "500" }}>
                        demo
                      </span>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <h6>License #: 12345</h6>
                      </div>
                    </div>
                    <div>
                      <h6>demo@gmail.com</h6>
                      <h6>5698457854</h6>
                    </div>
                  </div>
                </div>
              </CardActionArea>
            </div>

            <div
              className="col-12 col-md-4  inner-card p-0 card-com"
              style={{
                border: "2px solid lightgray",
                width: "30%",
              }}
              // key={record.id}
              onClick={handledata}
            >
              <CardActionArea>
                <div className="d-flex section-1 flex-column">
                  <div
                    className="card-img"
                    style={{ height: "7em", backgroundColor: "lightgray" }}
                  >
                    <Avatar src="/broken-image.jpg" />
                  </div>
                  <div style={{ padding: "0.7rem" }}>
                    <div>
                      <span style={{ fontSize: "20px", fontWeight: "500" }}>
                        demo
                      </span>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <h6>License #: 12345</h6>
                      </div>
                    </div>
                    <div>
                      <h6>demo@gmail.com</h6>
                      <h6>5698457854</h6>
                    </div>
                  </div>
                </div>
              </CardActionArea>
            </div>

            <div
              className="col-12 col-md-4  inner-card p-0 card-com"
              style={{
                border: "2px solid lightgray",
                width: "30%",
              }}
              // key={record.id}
              onClick={handledata}
            >
              <CardActionArea>
                <div className="d-flex section-1 flex-column">
                  <div
                    className="card-img"
                    style={{ height: "7em", backgroundColor: "lightgray" }}
                  >
                    <Avatar src="/broken-image.jpg" />
                  </div>
                  <div style={{ padding: "0.7rem" }}>
                    <div>
                      <span style={{ fontSize: "20px", fontWeight: "500" }}>
                        demo
                      </span>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <h6>License #: 12345</h6>
                      </div>
                    </div>
                    <div>
                      <h6>demo@gmail.com</h6>
                      <h6>5698457854</h6>
                    </div>
                  </div>
                </div>
              </CardActionArea>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              background: "white",
              padding: "20px",
              margin: "1.5em 0",
            }}
          >
            <span
              style={{
                // cursor: page === 1 ? "not-allowed" : "pointer",
                // color: page === 1 ? "gray" : "black",
                fontSize: "larger",
              }}
            >
              {" "}
              <FaAnglesLeft style={{ marginRight: "1em" }} />{" "}
            </span>

            <span className="set-page-no">1</span>

            <span
              style={{
                //     cursor: data < 12 || disabledNext ? "not-allowed" : "pointer",
                fontSize: "larger",
                //     color: data < 12 || disabledNext ? "gray" : "black",
              }}
            >
              <FaAnglesRight style={{ marginLeft: "1em" }} />
            </span>
          </div>
        </>
      )}
    </>
  );
}

export default Companies;
