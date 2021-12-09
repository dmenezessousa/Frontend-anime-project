import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Row from "./components/Row/Row";
import requests from "./components/lib/requests";

import "./App.css";
import Signin from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";
function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Banner />
        <Row
          title="Original Video Animation"
          fetchUrl={requests.fetchOVA}
          isLargeRow
        />
        <Row title="TV Shows" fetchUrl={requests.fetchTv} />
        <Row title="Movies" fetchUrl={requests.fetchMovies} />
        <Row title="Special Episodes" fetchUrl={requests.fetchSpecial} />
        <Routes>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
