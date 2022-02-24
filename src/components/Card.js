import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={require("../images/1.jpg")} height="100" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
        <div className="card-description">{props.description}</div>
        <div className="btn">
          <button>View More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
