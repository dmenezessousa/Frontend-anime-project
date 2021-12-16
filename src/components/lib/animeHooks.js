import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import Anime from "../Anime/Anime";
import Banner from "../Banner/Banner";
import Row from "../Row/Row";

function AnimeHooks() {
  const [animeInput, setAnimeInput] = useState("");
  const [animeArray, setAnimeArray] = useState([]);
  const [submit, setSubmit] = useState(false);
  const { search } = useLocation();
  const navigate = useNavigate();

  function Anime(animeTitle) {
    const requests = {
      fetchTv: `/search/anime?type=tv&limit=12&q=${animeTitle}`,
      fetchMovies: `/search/anime?type=Movie&limit=12&q=${animeTitle}`,
      fetchSpecial: `/search/anime?type=Special&limit=12&q=${animeTitle}`,
      fetchOVA: `/search/anime?type=OVA&limit=12&q=${animeTitle}`,
    };
    return (
      <div>
        <Banner />
        <Row title="Original Video Animation" fetchUrl={requests.fetchOVA} />
        <Row title="TV Shows" fetchUrl={requests.fetchTv} />
        <Row title="Movies" fetchUrl={requests.fetchMovies} />
        <Row title="Special Episodes" fetchUrl={requests.fetchSpecial} />
      </div>
    );
  }

  useEffect(() => {
    if (submit) {
      setSubmit(false);
      Anime(animeInput);
    }
  }, [submit]);

  useEffect(() => {
    const values = queryString.parse(search);
    if (values.q) {
      Anime(values.q);
    } else {
      <Anime />;
    }
  }, []);
  return [animeInput, setAnimeInput, animeArray, setSubmit];
}

export default AnimeHooks;
