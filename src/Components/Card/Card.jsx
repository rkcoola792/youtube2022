import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
const Card = ({ item }) => {
  return (
    <Link className="link" to={`/products/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span> New Season</span>}
          <img
            className="mainImg"
            src={"http://localhost:1337" + item.attributes.img1.data.attributes.url}
            alt=""
          />
          <img
            className="secondImg"
            src={"http://localhost:1337" + item.attributes.img2.data.attributes.url}
            alt=""
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 10}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
