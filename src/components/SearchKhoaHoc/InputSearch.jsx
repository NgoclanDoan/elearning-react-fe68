import React, { Component } from "react";

export default class InputSearch extends Component {
  render() {
    return (
      <div>
        <div className=" text-gray-600">
          <input
            type="search"
            name="serch"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-none text-gray-600 h-10 pl-5 pr-10 mr-1 bg-whitetext-sm focus:outline-none"
          />
        </div>
      </div>
    );
  }
}
