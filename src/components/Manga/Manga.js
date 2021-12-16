import React from "react";
import mangaRequests from "../lib/mangaRequests";
import Row from "../Row/Row";
import MangaBanner from "../Banner/MangaBanner";
function Anime() {
  return (
    <div>
      <MangaBanner />
      <Row title="Original Video Animation" fetchUrl={mangaRequests.fetchOVA} />
      <Row title="TV Shows" fetchUrl={mangaRequests.fetchTv} />
      <Row title="Movies" fetchUrl={mangaRequests.fetchMovies} />
      <Row title="Special Episodes" fetchUrl={mangaRequests.fetchSpecial} />
    </div>
  );
}

export default Anime;
