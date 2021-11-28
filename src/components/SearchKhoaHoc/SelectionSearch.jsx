import React, { Component } from "react";

export default class SelectionSearch extends Component {
  render() {
    return (
      <div class="relative inline-flex">
        <select class="w-full border border-gray-300 rounded-none text-gray-600 h-10 pl-5 pr-10 mr-1 bg-white hover:border-gray-400 focus:outline-none appearance-none">
          <option>Cae</option>
          <option>Red</option>
          <option>Blue</option>
          <option>Yellow</option>
          <option>Black</option>
          <option>Orange</option>
          <option>Purple</option>
          <option>Gray</option>
          <option>White</option>
        </select>
      </div>
    );
  }
}
