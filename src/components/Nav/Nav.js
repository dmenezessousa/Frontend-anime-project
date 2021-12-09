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
    return () => {
      window.removeEventListener("scroll");
    };
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
    </div>
    // <nav >
    // <div >
    // <Link to="/"  href="#">
    //     Anime
    // </Link>
    // <div style={{display: "flex", justifyContent: "space-between"}} >
    //     <ul >
    //     <li >
    //         <Link to={link1} >
    //         {linkTittle1}
    //         </Link>
    //     </li>
    //     <li >
    //         <Link to={link2}  onClick={()=> logoutBotton()} >
    //         {linkTittle2}
    //         </Link>
    //     </li>
    //     <li >
    //         <Link to={"/"} >
    //         Favorites
    //         </Link>
    //     </li>
    //     </ul>
    // </div>
    // </div>
    // </nav>
  );
}

export default Nav;
