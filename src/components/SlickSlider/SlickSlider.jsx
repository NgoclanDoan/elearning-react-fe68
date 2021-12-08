import React, { Component } from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem";
import "./SlickSlider.css";
import NextArrow from "components/ArrowSlider/NextArrow";
import PrevArrow from "components/ArrowSlider/PrevArrow";
export default class SlickSlider extends Component {
  render() {
    const { listCourses } = this.props;

    const settings = {
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      lazyLoad: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    const renderListCourses = (listCourses) => {
      return listCourses.map((course) => {
        const { hinhAnh, tenKhoaHoc, nguoiTao } = course;
        return (
          <SliderItem
            hinhAnh={hinhAnh}
            tenKhoaHoc={tenKhoaHoc}
            nguoiTao={nguoiTao.hoTen}
          />
        );
      });
    };

    return (
      <div>
        <Slider {...settings}>
          {listCourses.length > 0 && renderListCourses(listCourses)}
        </Slider>
      </div>
    );
  }
}
