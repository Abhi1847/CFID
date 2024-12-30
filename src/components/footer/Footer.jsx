import React from "react";
import "../footer/footer.css";

const Footer = () => {
  return (
    <footer className=" text-light py-4" style={{ background: "#f2f2f3" }}>
      <div className="container">
        <div className="row d-flex flex-wrap">
          <div className="col-12 d-flex flex-column flex-md-row">
            <div
              className="col-md-6 d-flex justify-content-start"
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "black",
              }}
            >
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#"
                    className="text-dark"
                    style={{
                      fontSize: 15,
                    }}
                  >
                    Contact us with your comments, questions and feedback
                  </a>
                </li>
                <li>
                  <span
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Copyright © 2014 California State University |{" "}
                    <a href="#" className="text-dark">
                      Disclaimer
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <div
              className="col-md-6"
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "black",
              }}
            >
              <p className="login-note">
                Logging in is only required for editing and submitting new
                companies.
                <br />
                If you had an account on the previous site, enter your email
                address and click request new password
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
