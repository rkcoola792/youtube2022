import React from "react";
import "./Product.scss";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
const Product = () => {
  // const images = [
  //   "https://images.pexels.com/photos/9939793/pexels-photo-9939793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // ];
  const id = useParams().id;
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const [selectedImg, setSelectedImg] = useState("img1");
  const [quantity, setQuantity] = useState(1);

  
  console.log("In product", data);
  // console.log("Selected image",selectedImg)
  // console.log("loading",loading)
  return (
    <div className="product">
      {loading ? (
        "Loading"
      ) : (
        <>
          {" "}
          <div className="left">
            <div className="images">
              <img
                src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.img1?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg("img1")}
              />
              <img
                src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.img2?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
            <img 
                src={process.env.REACT_APP_UPLOAD_URL+data?.attributes[selectedImg]?.data?.attributes?.url}
                alt=""
              />
              
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">{"$"+data?.attributes?.price}</span>
            <p>
            {data?.attributes?.desc}
             </p>

            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
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
        </>
      )}
    </div>
  );
};

export default Product;
