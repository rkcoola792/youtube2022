import React from "react";
import "./Product.scss";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
const Product = () => {
  const images = [
    "https://images.pexels.com/photos/9939793/pexels-photo-9939793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const [quantity, setQuantity] = useState(1);
  const [selectImg, setSelectImg] = useState(0);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectImg]} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          blanditiis exercitationem impedit dignissimos numquam aspernatur
          placeat consectetur atque aut est, voluptatibus tempora dolores
          pariatur possimus libero! Mollitia esse quis dignissimos?
        </p>

        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <button className="add">
          <ShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />
            ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon />
            ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <div className="span">Vendor:Louis Vuitton</div>
          <div className="span">Product type: Jacket</div>
          <div className="span">Tag : Women, Top, Jacket</div>
        </div>
        <hr />
        <div className="info">
          <div className="span">DESCRIPTION</div>
          <hr />
          <div className="span">ADDITIONAL INFO</div>
          <hr />
          <div className="span">FAQ</div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Product;
