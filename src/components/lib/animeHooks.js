import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

function AnimeHooks() {
  const [animeInput, setAnimeInput] = useState("");
  const [animeArray, setAnimeArray] = useState([]);
  const [submit, setSubmit] = useState(false);
  const { search } = useLocation();
  const navigate = useNavigate();

  function getRandomAnime() {
    let randomMoviesArray = ["naruto", "onepiece", "fullmetal", "gintama"];

    let randomIndex = Math.floor(Math.random() * randomMoviesArray.length);

    return randomMoviesArray[randomIndex];
  }

  async function getAnime(animeTitle) {
    navigate(`/anime?q=${animeTitle}`, {
      replace: true,
    });
    try {
      let payload = await axios.get(
        `https://api.jikan.moe/v3/search/anime?q=${animeTitle}`
      );

      let animeIdArray = payload.data.Search.map((item) => item.mal_id);

      let promiseAnimeArray = animeIdArray.map(async (item) => {
        return await axios.get(
          `https://api.jikan.moe/v3/search/anime?q=${item}`
        );
      });

      Promise.all(promiseAnimeArray)
        .then((result) => {
          setAnimeArray(result);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {}
  }

  useEffect(() => {
    console.log(submit);
    if (submit) {
      setSubmit(false);
      getAnime(animeInput);
    }
  }, [submit]);

  useEffect(() => {
    const values = queryString.parse(search);
    if (values.q) {
      getAnime(values.q);
    } else {
      getAnime(getRandomAnime());
    }
  }, []);
  return [animeInput, setAnimeInput, animeArray, setSubmit];
}

export default AnimeHooks;
