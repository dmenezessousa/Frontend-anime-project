import React from "react";
import Row from "../Row/Row";
import Banner from "../Banner/Banner";
import requests from "../lib/requests";

function Anime() {
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
