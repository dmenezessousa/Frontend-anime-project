import React from "react";
import { useHorizontalScroll } from "../lib/useSideScroll";

function Scroll({ animes, isLargeRow }) {
  const scrollRef = useHorizontalScroll();

  return (
    <div>
      <div className="row_posters" ref={scrollRef}>
        {animes.map((item) => {
          return (
            <img
              key={item.mal_id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={isLargeRow ? item.image_url : item.image_url}
              alt={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Scroll;
