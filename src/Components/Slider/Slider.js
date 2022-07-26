import React, { Component } from "react";
import "./Slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1 from './../../images/slide_1.jpg'
import slide2 from './../../images/slide_2.jpg'
import slide3 from './../../images/slide_3.jpg'

export class SliderComponent extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight:true,
      autoplaySpeed: 2000,
      autoplay: true,
      arrows: false
    
    };
    return (
      <div className="slider__container">
        
         <Slider {...settings}>
           <div className="slide">
             <img src={slide1}/>
           </div>
           <div className="slide">
           <img src={slide2}/>
           </div>
           <div className="slide">
           <img src={slide3}/>
           </div>
          
         </Slider>
     </div>
   
    );
  }
}