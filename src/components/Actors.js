import React from "react";
import { actors } from "../data";

function Actors() {

  const listDisp = actors.map((item) =>
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
    <h1>Actors Page</h1>
    {listDisp}
  </div>;
}

export default Actors;
