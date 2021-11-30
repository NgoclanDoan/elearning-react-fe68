import React, { Component } from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem";
import "./SlickSlider.css";
import QuickViewInfoCourse from "../QuickViewInfoCourse";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "40px",
        height: "40px",
        background: "white",
        borderRadius: "50%",
        border: "1px solid gray",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-blue-700 absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "40px",
        height: "40px",
        background: "white",
        borderRadius: "50%",
        border: "1px solid gray",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-blue-700 absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
}
export default class SlickSlider extends Component {
  render() {
    const settings = {
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      lazyLoad: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
        </Slider>
      </div>
    );
  }
}
