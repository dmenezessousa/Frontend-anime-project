import React, { useState, useEffect } from "react";
import axiosAPI from "../lib/axiosApi";
import Loading from "../lib/Loading";
import "./Row.css";
import MangaScroll from "./MangaScroll";

function MangaRow({ title, fetchUrl, isLargeRow }) {
  const [manga, setManga] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await axiosAPI.get(fetchUrl);
      setManga(request.data.results);
      setLoading(false);
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
        <MangaScroll manga={manga} isLargeRow={isLargeRow} />
      )}
    </div>
  );
}

export default MangaRow;
