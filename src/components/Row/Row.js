import React, { useState, useEffect } from "react";
import axiosAPI from "../lib/axiosApi";
import Loading from "../lib/Loading";
import "./Row.css";
import Scroll from "./Scroll";

function Row({ title, fetchUrl, isLargeRow }) {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axiosAPI.get(fetchUrl);
      setAnimes(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(fetchUrl);

  return (
    <div className="row">
      <h2>{title}</h2>
      {loading ? (
        <Loading />
      ) : (
        <Scroll animes={animes} isLargeRow={isLargeRow} />
      )}
    </div>
  );
}

export default Row;
