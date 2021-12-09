import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Row from "./components/Row/Row";
import requests from "./components/lib/requests";

import "./App.css";
import Signin from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Row title="TV's" fetchUrl={requests.fetchTv} />
      <Row title="Movies" fetchUrl={requests.fetchMovies} />
      <Row title="Special's" fetchUrl={requests.fetchSpecial} />
      <Row title="OVA's" fetchUrl={requests.fetchOVA} />

      {/* <Router>
        <Routes>
          <Route path="/sign-in" element={<Signin/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
