import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";

import "./App.css";
import Signin from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";
import Nav from "./components/Nav/Nav";
import Anime from "./components/Anime/Anime";
import Manga from "./components/Manga/Manga";
function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/" element={<Anime />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
