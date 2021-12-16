import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../lib/Loading";
import axios from "../lib/axiosApi";
import Banner from "../Banner/Banner";
import AxiosBackend from "../lib/axiosBackend";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AnimeDetails() {
  const [animeList, setAnimeList] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAnimeInfo();
  }, []);

  async function handleAddToMyList(animeDetail) {
    try {
      await AxiosBackend.post("/api/users/anime/add-anime", {
        title: animeDetail.title,
        animePoster: animeDetail.image_url,
        animeID: animeDetail.mal_id,
        animeOwner: "",
      });
      toast.success("Added To List", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        position: "top-center",
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function getAnimeInfo() {
    try {
      let payload = await axios.get(`/anime/${id}`);
      setAnimeList(payload.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <Banner />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div style={{ marginTop: 30, color: "#fff" }}>
            <img
              style={{ marginLeft: "45%", height: 400 }}
              src={animeList.image_url}
              alt={animeList.title}
            />
          </div>
          <div style={{ marginLeft: "43%", height: "fit-content" }}>
            <table style={{ marginTop: 30, color: "#fff" }}>
              <tbody>
                <tr>
                  <td>Title: </td>
                  <td style={{ width: 300 }}>{animeList.title}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Synopsis: </td>
                  <td style={{ width: 30 }}>{animeList.synopsis}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>episodes: </td>
                  <td style={{ width: 30 }}>{animeList.episodes}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>score: </td>
                  <td style={{ width: 30 }}>{animeList.score}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Learn More: </td>
                  <td>
                    <a
                      style={{ textDecoration: "none", color: "red" }}
                      href={animeList.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {" "}
                      Click here
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={() => handleAddToMyList(animeList)}
              className="w-100 btn btn-lg btn-primary"
              style={{
                backgroundColor: "red",
                color: "#fff",
                borderRadius: 5,
                height: 50,
                marginTop: 5,
                cursor: "pointer",
                width: 370,
              }}
            >
              Add to My List
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnimeDetails;
