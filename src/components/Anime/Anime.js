import React, { useContext } from "react";
import Row from "../Row/AnimeRow";
import Banner from "../Banner/Banner";
import { AnimeInputContext } from "../../animeContext";

function Anime() {
  const { animeInput, setAnimeInput, handleInput } =
    useContext(AnimeInputContext);

  const requests = {
    fetchTv: `/search/anime?type=tv&limit=15&q=${animeInput}`,
    fetchMovies: `/search/anime?type=Movie&limit=15&q=${animeInput}`,
    fetchSpecial: `/search/anime?type=Special&limit=15&q=${animeInput}`,
    fetchOVA: `/search/anime?type=OVA&limit=15&q=${animeInput}`,
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

export default Anime;
