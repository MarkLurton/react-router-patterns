import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <div className="DogList">
      <h1>Hello. Here are the dogs. Click on them for more info.</h1>
      {dogs.map((d) => (
        <div key={d.name}>
          <img src={d.src} alt={d.name} />
          <h3>
            <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default DogList;
