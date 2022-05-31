import React from "react";
import { directors } from "../data";

function Directors() {

  const listDisp = directors.map((item) =>
  {
    return (
      <div>
        <h2>{item.name}</h2>
        <ul>
          {item.movies.map((item) =>
          {
            return (
              <li>{item}</li>
            )
          })}
        </ul>
      </div>
    )
  })

  return <div>
    <h1>Directors Page</h1>
    {listDisp}
  </div>;
}

export default Directors;
