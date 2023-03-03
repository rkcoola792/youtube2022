import React from "react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { useState } from "react";
import "./Slider.scss";
const data = [
  "https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/175696/pexels-photo-175696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/757312/pexels-photo-757312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]

const Slider = () => {

  const [currentSlide,setCurrentSlide]=useState(0);

  const nextSlide=()=>{
    setCurrentSlide(currentSlide===2 ? 0 : prev=>prev+1)
  }
  
 const prevSlide=()=>{
  setCurrentSlide(currentSlide===0 ? 2 : prev=>prev-1)
 }



  return (
    <div className="slider" >
      <div className="container" style={{transform:`translate(-${currentSlide*100}vw)`}}>
        
        {/* {data.map((ele) => (
          <img src={ele} alt="" />
        ))} */}

        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" /> 
    
      </div>

      <div className="slider-icons">
        <div className="icon" onClick={prevSlide}>
          <WestIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
