import {
  CaretRightOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  RobotOutlined,
  TabletOutlined,
  TrophyOutlined,
  UndoOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    return (
      <div
        className="ml-10"
        style={{
          boxShadow: "0 2px 4px #00000014, 0 4px 12px #00000014",
        }}
      >
        <div>
          <div>
            <button className="cursor-pointer w-full relative">
              <img
                src="https://img-c.udemycdn.com/course/240x135/766592_66ac_5.jpg"
                alt="https://img-c.udemycdn.com/course/240x135/766592_66ac_5.jpg"
                className="w-full top-0 left-0"
              />
              <span
                className="h-full top-0 left-0 w-full  absolute"
                style={{
                  border: "1px solid #d1d7dc",
                  background:
                    "linear-gradient(180deg,rgba(28,29,31,0) 0%,rgba(28,29,31,0.9) 100%)",
                }}
              ></span>
              <span className="text-5xl  flex items-center justify-center h-full top-0 left-0 w-full  absolute">
                <CaretRightOutlined className=" bg-white rounded-full text-black pl-1" />
              </span>
              <span className="text-white flex items-end pb-6 justify-center h-full top-0 left-0 w-full   absolute">
                Preview this course
              </span>
            </button>
            <div
              className="p-7 "
              style={{
                borderBottom: "1px solid #dcdacb",
              }}
            >
              <div>
                <div className="flex items-center mb-2">
                  <span className="font-bold text-3xl mr-3">$13.99</span>
                  <span className="text-gray-500 mr-3">
                    <s>$84.99</s>
                  </span>
                  <span className="text-gray-600 text-base">84% off</span>
                </div>
                <div
                  className="flex items-center text-red-800 mb-4
                "
                >
                  <ClockCircleOutlined />
                  <span className="text-xs ml-1">
                    {" "}
                    <span className="font-bold">5 hours</span> left at this
                    price!
                  </span>
                </div>
                <button className="w-full border text-sm hover:bg-red-600 border-red-500 bg-red-500 text-white cursor-pointer font-bold h-11 mb-3">
                  Add to cart
                </button>
                <button className="w-full border border-gray-800 text-gray-800 cursor-pointer font-bold h-11  hover:bg-gray-200">
                  Buy now
                </button>
                <div className="flex justify-center items-center">
                  <span className="text-xs mt-3 border-gray-600">
                    30-Day Money-Back Guarantee
                  </span>
                </div>
                <div className="mt-4">
                  <h2 className="font-bold">This course includes:</h2>
                  <ul>
                    <li className="pt-1">
                      <div className="flex items-center">
                        <RobotOutlined className="text-xs" />
                        <p className="text-sm ml-4">2 hours on-demand video</p>
                      </div>
                    </li>
                    <li className="pt-1">
                      <div className="flex items-center">
                        <FileTextOutlined className="text-xs" />
                        <p className="text-sm ml-4">73 articles</p>
                      </div>
                    </li>
                    <li className="pt-1">
                      <div className="flex items-center">
                        <UploadOutlined className="text-xs" />
                        <p className="text-sm ml-4">
                          38 downloadable resources
                        </p>
                      </div>
                    </li>
                    <li className="pt-1">
                      <div className="flex items-center">
                        <UndoOutlined className="text-xs" />
                        <p className="text-sm ml-4">Full lifetime access</p>
                      </div>
                    </li>
                    <li className="pt-1">
                      <div className="flex items-center">
                        <TabletOutlined className="text-xs" />
                        <p className="text-sm ml-4">Access on mobile and TV</p>
                      </div>
                    </li>
                    <li className="pt-1">
                      <div className="flex items-center">
                        <TrophyOutlined className="text-xs" />
                        <p className="text-sm ml-4">
                          Certificate of completion
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-5 grid grid-cols-2">
                  <button className="cursor-pointer font-bold underline ">
                    Apply Coupon
                  </button>
                  <button className="cursor-pointer font-bold underline ">
                    Gift this couse
                  </button>
                </div>
              </div>
            </div>
            <div className="p-7 ">
              <h1 className="text-lg font-bold">Training 5 or more people?</h1>
              <p className="py-2">
                Get your team access to 6,000+ top Udemy courses anytime,
                anywhere.
              </p>
              <button className="w-full border border-gray-800 text-gray-800 cursor-pointer font-bold h-12 hover:bg-gray-200">
                Try Udemy Bussiness
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
