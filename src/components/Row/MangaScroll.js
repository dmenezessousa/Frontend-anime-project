import React from "react";
import { Link } from "react-router-dom";
import { useHorizontalScroll } from "../lib/useSideScroll";

function MangaScroll({ manga, isLargeRow }) {
  const scrollRef = useHorizontalScroll();
  console.log(manga);
  return (
    <div>
      <div className="row_posters" ref={scrollRef}>
        {manga.map((item) => {
          return (
            <Link
              className={`link ${isLargeRow && "link_posterLarge"}`}
              to={{ pathname: `/manga-detail/${item.mal_id}` }}
            >
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={item.mal_id}
                src={isLargeRow ? item.image_url : item.image_url}
                alt={item.title}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MangaScroll;
