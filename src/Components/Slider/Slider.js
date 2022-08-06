import React, { Component } from "react";
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class SliderComponent extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      autoplaySpeed: 2000,
      autoplay: false,
      arrows: false,
    };
    return (
      <div className="slider__container">
        <Slider {...settings}>
          <div className="slide">
            <img src={require("/assets/images/slide_1.jpg")} />
          </div>
          <div className="slide">
            <img src={require("/assets/images/slide_2.jpg")} />
          </div>
          <div className="slide">
            <img src={require("/assets/images/slide_2.jpg")} />
          </div>
        </Slider>
      </div>
    );
  }
}
