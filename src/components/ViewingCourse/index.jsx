import React, { Component } from "react";
import NextArrow from "components/ArrowSlider/NextArrow";
import PrevArrow from "components/ArrowSlider/PrevArrow";
import SliderItem from "../SlickSlider/SliderItem";
import Slider from "react-slick";
import khoaHocApi from "apis/khoaHocApi";

export default class ViewingCourse extends Component {
  state = {
    listCourses: [],
  };

  componentDidMount() {
    khoaHocApi.layDanhSachKhoaHoc().then((res) => {
      console.log(res.data.slice(1, 15));
      const listCoursesUpdate = res.data.slice(1, 15);
      return this.setState({ listCourses: listCoursesUpdate });
    });
  }

  renderListCourses = (listCourses) => {
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

  render() {
    const settings = {
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      lazyLoad: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <div className="container w-full mx-auto  mb-8">
        <h2 className="mb-6 mt-7 text-xl">Students are viewing</h2>
        <Slider {...settings}>
          {this.state.listCourses.length > 0 &&
            this.renderListCourses(this.state.listCourses)}
        </Slider>
      </div>
    );
  }
}
