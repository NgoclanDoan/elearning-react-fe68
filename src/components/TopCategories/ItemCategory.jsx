import { CodeSandboxOutlined } from "@ant-design/icons";
import React, { Component } from "react";

export default class ItemCategory extends Component {
  render() {
    const { tenDanhMuc, svg } = this.props;
    return (
      <div
        className="my-2 p-4 cursor-pointer"
        style={{
          boxShadow:
            "0 0 1px 1px rgba(20,23,28,.1),0 3px 1px 0 rgba(20,23,28,.1)",
        }}
      >
        <div className="flex items-center group">
          <div className="text-5xl text-gray-500 mr-4 leading-0 group-hover:text-black">
            {svg}
          </div>
          <div className="text-base  group-hover:text-black">{tenDanhMuc}</div>
        </div>
      </div>
    );
  }
}
