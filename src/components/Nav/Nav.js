import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../Context/userContext";
import logo from "./animelogo.png";
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

  //   const {
  //     state: { user },
  //     dispatch,
  //   } = useContext(userContext);

  //   let linkTittle1 = user?.isAuth ? user?.userName : "Sign up";
  //   let link1 = user?.isAuth ? "/profile" : "/sign-up";

  //   let linkTittle2 = user?.isAuth ? "logout" : "Sign in";
  //   let link2 = user?.isAuth ? "/" : "/sign-in";

  //   let logoutBotton = user?.isAuth ? logout : () => {};

  //   function logout() {
  //     dispatch({
  //       type: "LOGOUT",
  //     });
  //     window.localStorage.removeItem("jwtToken");
  //   }

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="animelogo" />
      <img className="nav_avatar" src={avatar} alt="avatar" />
      <ul className="nav_ul">
        <li className="nav_li">Anime</li>
        <li className="nav_li">Manga</li>
        <li className="nav_li">Sing In</li>
        <li className="nav_li">Sing Up</li>
      </ul>
    </div>
  );
}

export default Nav;
