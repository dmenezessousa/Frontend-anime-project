import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../lib/Loading";
import axios from "../lib/axiosApi";
import Banner from "../Banner/Banner";

function AnimeDetails() {
  const [animeList, setAnimeList] = useState(null);
  const { name } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAnimeInfo();
  }, []);

  async function getAnimeInfo() {
    try {
      let payload = await axios.get(`/anime/${name}`);
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
