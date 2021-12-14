import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../lib/Loading";
import axios from "../lib/axiosApi";
import Banner from "../Banner/Banner";

function AnimeDetails() {
  const [animeList, setAnimeList] = useState([]);
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  console.log(name);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  useEffect(() => {
    getAnimeInfo();
  }, []);

  async function getAnimeInfo() {
    try {
      let payload = await axios.get(`/search/anime?q=${name}`);
      setAnimeList(payload.data.results);
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
              style={{ marginLeft: "50%", height: 400 }}
              src={animeList.image_url}
              alt={animeList.title}
            />
          </div>
          <div style={{ marginLeft: "47%", height: "fit-content" }}>
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
                    <a href={animeList.url}> Click here</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnimeDetails;
