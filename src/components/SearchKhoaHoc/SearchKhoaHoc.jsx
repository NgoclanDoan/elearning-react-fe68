import React, { Component } from 'react'
import InputSearch from './InputSearch'
import SelectionSearch from './SelectionSearch'

export default class SearchKhoaHoc extends Component {
    render() {
        return (
          <div className=" grid grid-cols-4 gap-0">
            <SelectionSearch />
            <SelectionSearch />
            <InputSearch />
            <button className=" w-3/4 bg-aqua__primary text-gray-800 font-bold rounded-none ml-1 py-2 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:bg-opacity-80 ">
              Search
            </button>
          </div>
        );
    }
}
