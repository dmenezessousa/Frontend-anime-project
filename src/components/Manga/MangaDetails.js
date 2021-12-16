import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../lib/Loading";
import axios from "../lib/axiosApi";
import MangaBanner from "../Banner/MangaBanner";
import AxiosBackend from "../lib/axiosBackend";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MangaDetails() {
  const [mangaList, setMangaList] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  console.log(mangaList);
  useEffect(() => {
    getMangaInfo();
  }, []);

  async function handleAddToMylist(mangaDetail) {
    try {
      await AxiosBackend.post("/api/users/manga/add-manga", {
        title: mangaDetail.title,
        mangaPoster: mangaDetail.image_url,
        mangaID: mangaDetail.mal_id,
        mangaOwner: "",
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

  async function getMangaInfo() {
    try {
      let payload = await axios.get(`/manga/${id}`);
      setMangaList(payload.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <MangaBanner />
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div style={{ marginTop: 30, color: "#fff" }}>
            <img
              style={{ marginLeft: "45%", height: 400 }}
              src={mangaList.image_url}
              alt={mangaList.title}
            />
          </div>
          <div style={{ marginLeft: "43%", height: "fit-content" }}>
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
                    <a
                      style={{ textDecoration: "none", color: "red" }}
                      href={mangaList.url}
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
              onClick={() => handleAddToMylist(mangaList)}
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

export default MangaDetails;
