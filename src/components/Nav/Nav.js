import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import logo from "./animelogo.png";
import offavatar from "./offlogo.png";
import avatar from "./Netflix-avatar.png";
import "./Nav.css";
import { useState } from "react/cjs/react.development";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);

  let Sign_in = user?.isAuth ? (
    <img className="nav_avatar_in" src={avatar} alt="avatar" />
  ) : (
    "Sign in"
  );
  let Profile = user?.isAuth ? "/profile" : "/sign-in";

  let userLogout = user?.isAuth ? "logout" : "Sign up";
  let Sign_up = user?.isAuth ? "/" : "/sign-up";

  let logoutBotton = user?.isAuth ? logout : () => {};

  function logout() {
    dispatch({
      type: "LOGOUT",
    });
    window.localStorage.removeItem("jwtToken");
  }

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src={logo}
        alt={<Link to={"/"}>animelogo</Link>}
      />
      <img className="nav_avatar" src={offavatar} alt="avatar" />
      <ul className="nav_ul">
        <li className="nav_li">
          <Link className="nav-link" to="/anime">
            Anime
          </Link>
        </li>
        <li className="nav_li">
          <Link className="nav-link" to="/manga">
            Manga
          </Link>
        </li>
        <li className="nav_li">
          <Link
            className="nav-link"
            to={Sign_up}
            onClick={() => logoutBotton()}
          >
            {userLogout}
          </Link>
        </li>
        <li className="nav_li">
          <Link className="nav-link" to={Profile}>
            {Sign_in}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
