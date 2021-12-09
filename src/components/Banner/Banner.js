import React, { useState, useEffect } from "react";

import axiosApi from "../lib/axiosApi";
import requests from "../lib/requests";
import "./Banner.css";

function Banner() {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axiosApi.get(requests.fetchTv);
      setAnime(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${anime?.image_url})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{anime?.title}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Details</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(anime?.synopsis, 150)}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
