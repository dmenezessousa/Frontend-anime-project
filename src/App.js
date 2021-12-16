import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwtDecode from "jwt-decode";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AnimeInputContext } from "./animeContext";
import "./App.css";
import Signin from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";
import Nav from "./components/Nav/Nav";
import Anime from "./components/Anime/Anime";
import AnimeDetails from "./components/Anime/AnimeDetails";
import MangaDetails from "./components/Manga/MangaDetails";
import Manga from "./components/Manga/Manga";
import MyAnimeList from "./components/MyList/MyAnimelist";
import MyMangaList from "./components/MyList/MyMangaList";
import Profile from "./components/Profile/Profile";
import { AuthContext } from "./components/Context/AuthContext";
function App() {
  const [animeInput, setAnimeInput] = useState("");

  const animeInputValue = {
    animeInput,
    setAnimeInput,
    handleInput,
  };

  function handleInput(e) {
    e.preventDefault();
    setAnimeInput(animeInput);
  }
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    let jwtToken = window.localStorage.getItem("jwtToken");

    if (jwtToken) {
      let decodedToken = jwtDecode(jwtToken);

      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        window.localStorage.removeItem("jwtToken");
        dispatch({
          type: "LOGOUT",
        });
      } else {
        dispatch({
          type: "LOGIN",
          email: decodedToken.email,
          userName: decodedToken.userName,
        });
      }
    }
  }, []);

  return (
    <div className="app">
      <ToastContainer />
      <Router>
        <AnimeInputContext.Provider value={animeInputValue}>
          <Nav />
          <Routes>
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/anime-detail/:id" element={<AnimeDetails />} />
            <Route path="/manga-detail/:id" element={<MangaDetails />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/myanimelist"
              element={
                <PrivateRoute>
                  <MyAnimeList />
                </PrivateRoute>
              }
            />
            <Route
              path="/mymangalist"
              element={
                <PrivateRoute>
                  <MyMangaList />
                </PrivateRoute>
              }
            />
            <Route
              path="/manga"
              element={
                <PrivateRoute>
                  <Manga />
                </PrivateRoute>
              }
            />
            <Route
              path="/anime"
              element={
                <PrivateRoute>
                  <Anime />
                </PrivateRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Manga />
                </PrivateRoute>
              }
            />
          </Routes>
        </AnimeInputContext.Provider>
      </Router>
    </div>
  );
}

export default App;
