import React, { Component } from "react";
import Content from "./Content";
export default class QuickViewInfoCourse extends Component {
  render() {
    // const { toolTipStatus } = this.props;
    return (
      //   <div
      //     className={`z-20 w-80 absolute transition duration-150 ease-in-out top-0 left-0 ml-8 shadow-lg bg-white p-4 rounded ${
      //       toolTipStatus ? "block" : "hidden"
      //     }`}
      //   >
      <div
        className={`z-20 w-80 absolute transition duration-150 ease-in-out top-0 left-0 ml-8 shadow-lg bg-white p-4 rounded
        }`}
      >
        <svg
          className="absolute left-0 -ml-2 bottom-0 top-0 h-full"
          width="9px"
          height="16px"
          viewBox="0 0 9 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Tooltips-"
              transform="translate(-874.000000, -1029.000000)"
              fill="#FFFFFF"
            >
              <g
                id="Group-3-Copy-16"
                transform="translate(850.000000, 975.000000)"
              >
                <g id="Group-2" transform="translate(24.000000, 0.000000)">
                  <polygon
                    id="Triangle"
                    transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                    points="4.5 57.5 12.5 66.5 -3.5 66.5"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <Content />
      </div>
    );
  }
}
