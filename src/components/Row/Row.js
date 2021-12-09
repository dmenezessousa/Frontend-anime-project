import React, { useState, useEffect } from "react";
import axiosAPI from "../lib/axiosApi";
import Loading from "../lib/Loading";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axiosAPI.get(fetchUrl);
      setAnimes(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      {loading ? (
        <Loading />
      ) : (
        <div className="row_posters">
          {animes.map((item) => {
            return (
              <img
                key={item.mal_id}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={isLargeRow ? item.image_url : item.image_url}
                alt={item.title}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Row;
