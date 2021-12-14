import React from "react";
import Row from "../Row/Row";
import Banner from "../Banner/Banner";
import requests from "../lib/requests";
import AnimeHooks from "../lib/animeHooks";
function Anime() {
  let [animeInput, setAnimeInput, ,] = AnimeHooks();

  function getRandomAnime() {
    let randomMoviesArray = ["naruto", "onepiece", "fullmetal", "gintama"];

    let randomIndex = Math.floor(Math.random() * randomMoviesArray.length);

    return randomMoviesArray[randomIndex];
  }

  const requests = {
    fetchTv: `/search/anime?type=tv&q=${getRandomAnime()}`,
    fetchMovies: `/search/anime?type=Movie&q=${getRandomAnime()}`,
    fetchSpecial: `/search/anime?type=Special&q=${getRandomAnime()}`,
    fetchOVA: `/search/anime?type=OVA&q=${getRandomAnime()}`,
  };

  return (
    <div>
      <Banner />
      <Row
        title="Original Video Animation"
        fetchUrl={requests.fetchOVA}
        isLargeRow
      />
      <Row title="TV Shows" fetchUrl={requests.fetchTv} />
      <Row title="Movies" fetchUrl={requests.fetchMovies} />
      <Row title="Special Episodes" fetchUrl={requests.fetchSpecial} />
    </div>
  );
}

export default Anime;
