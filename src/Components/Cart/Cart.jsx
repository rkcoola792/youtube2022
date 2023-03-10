import React from "react";
import "./Cart.scss";
import DeleteIcon from "@mui/icons-material/Delete";
const Cart = () => {
  const data = [
    {
      id: 1,
      img1: "https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1962567/pexels-photo-1962567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "long Sleeve Graphic T-shirt",
      isNew: "true",
      oldPrice: 19,
      price: 12,
      desc: "Desginer long sleeves tshirt!",
    },
    {
      id: 2,
      img1: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/2146344/pexels-photo-2146344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Coat",
      isNew: "",
      oldPrice: 32,
      price: 20,
      desc: "A long coat with fur!",
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="top">
          <div className="item" key={item.id}>
            <img src={item.img1} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className="price">1*{item.price}</div>
            </div>
            <DeleteIcon className="delete"></DeleteIcon>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>$123</span>
      </div>

      <div className="bottom">
        <button>PROCEED TO CHECKOUT</button>
        <div className="reset">Reset</div>
      </div>
    </div>
  );
};

export default Cart;