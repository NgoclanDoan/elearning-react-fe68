import React, { Component } from "react";
import RecommendLabel from "../RecommendLabel";
import { handleImgError } from "utils/handleImgError";
import arrImgAlt from "settings/arrImgAlternationConfig";
export default class SliderItem extends Component {
  state = {
    toolTipStatus: false,
  };

  render() {
    const randomImgError =
      arrImgAlt[Math.floor(Math.random() * arrImgAlt.length)];

    const { hinhAnh, tenKhoaHoc, nguoiTao } = this.props;

    return (
      <div className="mr-5 mb-4">
        <div
          onMouseEnter={() => this.setState({ toolTipStatus: true })}
          onMouseLeave={() => this.setState({ toolTipStatus: false })}
          className="item__shadow border border-gray-300 cursor-pointer relative"
          style={{ height: "298px" }}
        >
          <div className="relative">
            <div className=" border-b gray-300">
              <img
                className="w-full h-full object-cover "
                src={hinhAnh}
                alt={hinhAnh}
                style={{ height: "135px" }}
                onError={(e) => handleImgError(e, randomImgError)}
              />
            </div>
            <div className="absolute top-2 left-1">
              <RecommendLabel />
            </div>
          </div>
          <div className="px-4 my-3 truncate">
            <h3
              className="font-medium  line-clamp-2"
              style={{ minHeight: "42px" }}
            >
              {tenKhoaHoc}
            </h3>
            <p className="leading-10">{nguoiTao}</p>
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-200"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium px-1">4.4</span>
              <span>(39,821)</span>
            </div>
            <div className="leading-10 flex flex-row-reverse items-center">
              <span className="font-medium text-lg ">$12.99</span>
              <del>$94.99</del>
            </div>
          </div>
          {/* <QuickViewInfoCourse toolTipStatus={this.state.toolTipStatus} /> */}
        </div>
      </div>
    );
  }
}
