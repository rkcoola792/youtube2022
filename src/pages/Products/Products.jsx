import List from "../../Components/List/List";
import React from "react";
import "./Products.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
const Products = () => {
  //  to get the id of the roduct from the params
  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(0);
  const [sort, setSort] = useState(null);
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>

          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Coat</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Shirts</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>

        <div className="filterItem">
          <h2>Sort by</h2>
        </div>

        <div className="inputType">
          <input
            type="radio"
            id="asc"
            value="asc"
            name="price "
            onChange={(e) => setSort("asc")}
          />
          <label htmlFor="asc"> Price (Lowest first)</label>
        </div>

        <div className="inputType">
          <input className="radio"
            type="radio"
            id="asc"
            value="asc"
            name="price"
            onChange={(e) => setSort("desc")}
          />
          <label htmlFor="desc"> Price (Highest first)</label>
        </div>
      </div>

      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/14793008/pexels-photo-14793008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
