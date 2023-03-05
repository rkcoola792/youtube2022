import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <Link className="sale" to="/products/1">
            <button> Sale </button>
          </Link>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2036650/pexels-photo-2036650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <Link className="newSeason" to="/products/1">
            <button> New Season</button>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/3769148/pexels-photo-3769148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <Link className="accessories" to="/products/1">
            <button>Accessories</button>
          </Link>
        </div>
      </div>

      <div className="col col-lg">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <Link className="men" to="/products/1">
                <button>men</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <Link className="women" to="/products/1">
                {" "}
                <button>women</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
          <img
            // src="https://images.pexels.com/photos/1615799/pexels-photo-1615799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src="https://images.pexels.com/photos/6939258/pexels-photo-6939258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <Link className="accessories" to="/products/1">
            <button> Shoes </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
