import React from "react";
import './card.css'
const Card = ({ category }) => {
  const { title, img } = category
  return (

    <div
      style={{
        backgroundImage: `url(${img}})`,
        backgroundSize: "cover",
      }}
      className="category">
      <div className="content">
        <h3>{title}</h3>
      </div>
      <button>Wyszukaj</button>
    </div>
  );
};

export { Card };
