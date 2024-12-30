import { Link, useNavigate, useLocation } from "react-router-dom";
import "../navbar/nav.css";
import SignIn from "../login/SignIn";
import SignUp from "../login/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/reducers";
import { toast } from "react-toastify";
import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const isAuth = useSelector(
    (state) => state.counter.isAuth || localStorage.getItem("isAuth") === "true"
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logoutComponent = () => {
    dispatch(logout());
    toast.success("Logout successfully!");
    navigate("/");
  };

  const dummyImage =
    "https://www.kindpng.com/picc/m/22-223965_no-profile-picture-icon-circle-member-icon-png.png";

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container-fluid ">
          <Link
            to="/dashboard"
            className="navbar-brand d-flex flex-column"
            id="logoRS-nav-link"
          >
            <h4 className="h4 m-0">CALIFORNIA FOREST</h4>
            <h4 className="h4 m-0">INDUSTRY DIRECTORY</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ma-1 " id="navbarResponsive">
            <ul className="navbar-nav py-4 py-lg-0">
              <li
                className={`nav-item ${
                  location.pathname === "/dashboard" ? "active" : ""
                }`}
              >
                <Link to="/dashboard" className="nav-link">
                  Companies
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/services" ? "active" : ""
                }`}
              >
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              {isAuth && (
                <li
                  className={`nav-item ${
                    location.pathname === "/add-company" ? "active" : ""
                  }`}
                >
                  <Link to="/add-company" className="nav-link">
                    Add Company
                  </Link>
                </li>
              )}
            </ul>

            <div className="d-flex button-nav">
              {!isAuth ? (
                <>
                  <SignUp style={{ margin: "1em" }} />
                  <SignIn style={{ margin: "1em" }} />
                </>
              ) : (
                <div className="nav-links-other nav-profile">
                  <ul className="navbar-nav">
                    <li className="dropdown" ref={dropdownRef}>
                      <a
                        onClick={() => setIsLoggedIn(!isLoggedIn)}
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        aria-expanded={isLoggedIn}
                      >
                        <img
                          className="user_drop rounded-circle"
                          src={dummyImage}
                          alt="User"
                        />
                      </a>
                      {isLoggedIn && (
                        <ul
                          className={`dropdown-menu dropdown-menu-end${
                            isLoggedIn ? " show" : ""
                          }`}
                          aria-labelledby="navbarDropdown"
                          style={{
                            position: "absolute",
                            top: "100%",
                            right: "0",
                            zIndex: "1050",
                            height: "auto",
                          }}
                        >
                          <li>
                            <Link
                              to="/"
                              className="dropdown-item d-flex align-items-center"
                              onClick={() => logoutComponent()}
                            >
                              <LogoutIcon style={{ marginRight: "10px" }} />{" "}
                              Logout
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
