import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Mylist.css";

import AxiosBackend from "../lib/axiosBackend";
import Loading from "../lib/Loading";
import Banner from "../Banner/Banner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyAnimeList() {
  const [animeArray, setAnimeArray] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMovies();
  }, []);

  async function getAllMovies() {
    try {
      let payload = await AxiosBackend.get("/api/users/anime/get-all-anime");
      setAnimeArray(payload.data.payload);
      setLoading(false);
    } catch (e) {
      console.log(e.response);
    }
  }

  async function handleDelete(animeID) {
    try {
      let payload = await AxiosBackend.delete(
        `/api/users/anime/delete-anime/${animeID}`
      );

      let newFavoriteMovie = [...animeArray];
      let filteredMovieArray = newFavoriteMovie.filter(
        (item) => item._id !== payload.data.payload._id
      );

      setAnimeArray(filteredMovieArray);
      toast.success("Removed From List", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        position: "top-center",
      });
    } catch (e) {
      console.log(e.response);
    }
  }
  console.log(setAnimeArray);
  return (
    <div>
      <Banner />
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div style={{ marginLeft: "45%" }}>
            <div style={{ display: "flex" }}>
              <h1 style={{ color: "white" }}>My</h1>
              <h1 style={{ color: "red", marginLeft: 5 }}>Anime</h1>
              <h1 style={{ color: "white", marginLeft: 5 }}>List</h1>
            </div>
            {animeArray.map((item) => {
              return (
                <div key={item._id} style={{ width: 300, height: 600 }}>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontFamily: "monospace",
                    }}
                    to={{ pathname: `/anime-detail/${item.animeID}` }}
                  >
                    <img
                      className="movie-div"
                      src={item.animePoster}
                      alt={item.title}
                    />
                    <span>Title: {item.title}</span>
                    <br />
                    <span>Owner: {item._id}</span>
                  </Link>
                  <button
                    className="w-100 btn btn-lg btn-primary"
                    style={{
                      backgroundColor: "red",
                      color: "#fff",
                      borderRadius: 5,
                      height: 50,
                      marginTop: 5,
                      cursor: "pointer",
                      width: 225,
                    }}
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
            ;
          </div>
        )}
      </div>
    </div>
  );
}

export default MyAnimeList;
