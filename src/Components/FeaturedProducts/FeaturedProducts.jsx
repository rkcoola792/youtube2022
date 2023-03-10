import Card from "../Card/Card";
import React from "react";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  // const data = [
  //   {
  //     id: 1,
  //     img1: "https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/1962567/pexels-photo-1962567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "long Sleeve Graphic T-shirt",
  //     isNew: "true",
  //     oldPrice: 19,
  //     price: 12,
  //   },
  //   {
  //     id: 2,
  //     img1: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/2146344/pexels-photo-2146344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Coat",
  //     isNew: "",
  //     oldPrice: 32,
  //     price: 20,
  //   },
  //   {
  //     id: 3,
  //     img1: "https://images.pexels.com/photos/2853535/pexels-photo-2853535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/3597042/pexels-photo-3597042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     title: "Shirts",
  //     isNew: "false",
  //     oldPrice: 20,
  //     price: 10,
  //   },
  //   {
  //     id: 4,
  //     img1: "https://images.pexels.com/photos/3121137/pexels-photo-3121137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     img2: "https://images.pexels.com/photos/13484955/pexels-photo-13484955.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  //     title: "Jackets",
  //     isNew: "",
  //     oldPrice: 25,
  //     price: 16,
  //   },
  // ];

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          eveniet excepturi est asperiores commodi animi nihil maxime soluta
          totam sit explicabo hic, consectetur nobis fuga qui? Aperiam, fugiat?
          Officiis, iusto.
        </p>
      </div>

      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "Loading"
          : data.map((item) => <Card item={item} key={item.id}></Card>)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
