import React, { useContext } from "react";
import Row from "../Row/MangaRow";
import MangaBanner from "../Banner/MangaBanner";
import { AnimeInputContext } from "../../animeContext";

function Manga() {
  const { animeInput, setAnimeInput, handleInput } =
    useContext(AnimeInputContext);

  const requests = {
    fetchTv: `/search/manga?type=tv&limit=15&q=${animeInput}`,
    fetchMovies: `/search/manga?type=Movie&limit=15&q=${animeInput}`,
    fetchSpecial: `/search/manga?type=Special&limit=15&q=${animeInput}`,
    fetchOVA: `/search/manga?type=OVA&limit=15&q=${animeInput}`,
  };
  return (
    <div>
      <MangaBanner />
      <Row title="Original Video Animation" fetchUrl={requests.fetchOVA} />
      <Row title="TV Shows" fetchUrl={requests.fetchTv} />
      <Row title="Movies" fetchUrl={requests.fetchMovies} />
      <Row title="Special Episodes" fetchUrl={requests.fetchSpecial} />
    </div>
  );
}

export default Manga;
