import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../lib/Loading";
import axios from "../lib/axiosApi";
import Banner from "../Banner/Banner";

function AnimeDetails() {
  const [mangaList, setMangaList] = useState([]);
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  console.log(name);
  console.log(mangaList);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  useEffect(() => {
    getAnimeInfo();
  }, []);

  async function getAnimeInfo() {
    try {
      let payload = await axios.get(`/search/manga?q=${name}`);
      setMangaList(payload.data.results);
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
              src={mangaList.image_url}
              alt={mangaList.title}
            />
          </div>
          <div style={{ marginLeft: "47%", height: "fit-content" }}>
            <table style={{ marginTop: 30, color: "#fff" }}>
              <tbody>
                <tr>
                  <td>Title: </td>
                  <td style={{ width: 300 }}>{mangaList.title}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Synopsis: </td>
                  <td style={{ width: 30 }}>{mangaList.synopsis}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>episodes: </td>
                  <td style={{ width: 30 }}>{mangaList.episodes}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>score: </td>
                  <td style={{ width: 30 }}>{mangaList.score}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Learn More: </td>
                  <td>
                    <a href={mangaList.url}> Click here</a>
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
