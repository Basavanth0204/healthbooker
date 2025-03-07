import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { HashLink } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/reducers/rootSlice";
import { FiMenu } from "react-icons/fi";
import { RxBorderSolid, RxCross1, RxWidth } from "react-icons/rx";
import jwt_decode from "jwt-decode";

const Navbar = () => {
  const [iconActive, setIconActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(
    localStorage.getItem("token")
      ? jwt_decode(localStorage.getItem("token"))
      : ""
  );

  const logoutFunc = () => {
    dispatch(setUserInfo({}));
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header>
      <nav className={iconActive ? "nav-active" : ""}>
        
        <h2 className="nav-logo">
           <NavLink to={"/"}>HealthBooker</NavLink>
        </h2>
        <center>
          <img src="https://www.animatedimages.org/data/media/506/animated-health-image-0011.gif" style={{width:'20', height:70,borderRadius:20,border:'1px solid',borderColor:'rgb(0,180,204)'}}></img></center>
        <ul className="nav-links">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/doctors"}>Doctors</NavLink>
          </li>
          {token && user.isAdmin && (
            <li>
              <NavLink to={"/dashboard/users"}>Dashboard</NavLink>
            </li>
          )}
          {token && !user.isAdmin && (
            <>
              <li>
                <NavLink to={"/appointments"}>Appointments</NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>Notifications</NavLink>
              </li>
              <li>
                <NavLink to={"/applyfordoctor"}>Apply for doctor</NavLink>
              </li>
              <li>
                <HashLink to={"/#contact"}>Contact Us</HashLink>
              </li>
              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
            </>
          )}
          {!token ? (
            <>
              <li>
                <NavLink
                  className="btn"
                  to={"/login"}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="btn"
                  to={"/register"}
                >
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <span
                className="btn"
                onClick={logoutFunc}
              >
                Logout
              </span>
            </li>
          )}
        </ul>
      </nav>
      <div className="menu-icons">
        {!iconActive && (
          <FiMenu
            className="menu-open"
            onClick={() => {
              setIconActive(true);
            }}
          />
        )}
        {iconActive && (
          <RxCross1
            className="menu-close"
            onClick={() => {
              setIconActive(false);
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
