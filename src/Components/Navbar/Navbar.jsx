import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
// using material UI
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        {/* left div of navbar */}
        <div className="left">
          <div className="item">
            <img src="/images/indian-Icon.png" alt="" height={22} />
            <KeyboardArrowDownOutlinedIcon />
          </div>

          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownOutlinedIcon />
          </div>

          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>

        {/* center div */}
        <div className="center">
          <Link className="link" to="/">
            MEVEEA STORE
          </Link>
        </div>

        {/* right div */}
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>

          <div className="icons">
            <SearchOutlinedIcon></SearchOutlinedIcon>
            <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
            <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
            <div className="cartIcon">
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
            <span>0</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
