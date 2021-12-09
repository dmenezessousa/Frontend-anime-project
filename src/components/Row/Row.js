import React, { useState, useEffect } from "react";
import axiosAPI from "../lib/axiosApi";
import Loading from "../lib/Loading";
import "./Row.css";

function Row({ title, fetchUrl }) {
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
        <div className="row-posters">
          {animes.map((item) => {
            return (
              <img
                className="row_poster"
                src={item.image_url}
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
