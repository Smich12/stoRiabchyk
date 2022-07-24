import React, { Component } from "react";
import "./Slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1 from './../../images/slide1.jpg'

export class SliderComponent extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight:false,
      autoplaySpeed: 6000,
      autoplay: false,
      arrows: false
    
    };
    return (
      <div className="slider__container">
        
         <Slider {...settings}>
           <div className="slide">
             <img src={slide1}/>
           </div>
           <div className="slide">
             <h3>2</h3>
           </div>
           <div className="slide">
             <h3>3</h3>
           </div>
          
         </Slider>
     </div>
   
    );
  }
}