import React, { useState, useContext } from "react";
import Row from "../Row/Row";
import Banner from "../Banner/Banner";
import { AnimeInputContext } from "../../animeContext";
import Nav from "../Nav/Nav";

function Anime() {
  const { animeInput, setAnimeInput, handleInput } =
    useContext(AnimeInputContext);
  console.log(animeInput);

  const requests = {
    fetchTv: `/search/anime?type=tv&limit=12&q=${animeInput}`,
    fetchMovies: `/search/anime?type=Movie&limit=12&q=${animeInput}`,
    fetchSpecial: `/search/anime?type=Special&limit=12&q=${animeInput}`,
    fetchOVA: `/search/anime?type=OVA&limit=12&q=${animeInput}`,
  };
  console.log(requests.fetchTv);
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
