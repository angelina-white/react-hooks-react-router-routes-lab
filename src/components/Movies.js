import React from "react";
import { movies } from "../data";

function Movies() {

  const listDisp = movies.map((item) => 
  {
    return (
      <div>
        <h2>{item.title}</h2>
        <h3>{item.time}</h3>
        <ul>
          {item.genres.map((item) =>
          {
            return(
              <li>{item}</li>
            )
          })}
        </ul>
      </div>
    )
  })

  return <div>
    <h1>Movie Page</h1>
    {listDisp}
  </div>;
}

export default Movies;
