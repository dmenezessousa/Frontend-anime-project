import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import logo from "./animelogo.png";
import offavatar from "./offlogo.png";
import avatar from "./Netflix-avatar.png";
import "./Nav.css";
import { useState } from "react/cjs/react.development";
import { AnimeInputContext } from "../../animeContext";

function Nav() {
  const [show, handleShow] = useState(false);
  const { animeInput, setAnimeInput, handleInput } =
    useContext(AnimeInputContext);

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

  function logout() {
    dispatch({
      type: "LOGOUT",
    });
    window.localStorage.removeItem("jwtToken");
  }

  let Sign_in = user?.isAuth ? (
    <img className="nav_avatar_in" src={avatar} alt="avatar" />
  ) : (
    "Sign in"
  );
  let Profile = user?.isAuth ? "/profile" : "/sign-in";
  let Anime = user?.isAuth ? "anime" : "";
  let Manga = user?.isAuth ? "manga" : "";
  let userLogout = user?.isAuth ? "logout" : "Sign up";
  let Sign_up = user?.isAuth ? "/" : "/sign-up";
  let Search = user?.isAuth ? (
    <div class="search-container">
      <form onSubmit={handleInput}>
        <input
          value={animeInput}
          onChange={(e) => setAnimeInput(e.target.value)}
          class="search expandright"
          id="searchright"
          type="search"
          name="q"
          placeholder="Search"
        />
        <label class="button searchbutton" for="searchright">
          <span class="mglass">&#9906;</span>
        </label>
      </form>
    </div>
  ) : (
    <div></div>
  );

  let logoutBotton = user?.isAuth ? logout : () => {};

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <Link to={"/"}>
        <img className="nav_logo" src={logo} alt="AnimeLogo" />
      </Link>

      <img className="nav_avatar" src={offavatar} alt="avatar" />
      <ul className="nav_ul">
        {Search}
        <li className="nav_li">
          <Link className="nav-link" to="/anime">
            {Anime}
          </Link>
        </li>
        <li className="nav_li">
          <Link className="nav-link" to="/manga">
            {Manga}
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
