import React from "react";
import "./Cart.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem, resetCart } from "../../redux/cartReducer";
const Cart = () => {
  // const data = [
  //   {
  //     id: 1,
  //     img1: "https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/1962567/pexels-photo-1962567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "long Sleeve Graphic T-shirt",
  //     isNew: "true",
  //     oldPrice: 19,
  //     price: 12,
  //     desc: "Desginer long sleeves tshirt!",
  //   },
  //   {
  //     id: 2,
  //     img1: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/2146344/pexels-photo-2146344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Coat",
  //     isNew: "",
  //     oldPrice: 32,
  //     price: 20,
  //     desc: "A long coat with fur!",
  //   },
  // ];

  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  console.log("all products", products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="top">
          <div className="item" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className="price">
                {item.quantity}*{item.price}
              </div>
            </div>
            <DeleteIcon
              className="delete"
              onClick={() => dispatch(removeItem(item.id))}
            ></DeleteIcon>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>${totalPrice()}</span>
      </div>

      <div className="bottom">
        <button>PROCEED TO CHECKOUT</button>
        <div className="reset" onClick={() => dispatch(resetCart())}>Reset</div>
      </div>
    </div>
  );
};

export default Cart;
