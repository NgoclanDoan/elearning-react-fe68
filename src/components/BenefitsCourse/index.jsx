import React, { Component } from "react";

export default class BenefitsCourse extends Component {
  render() {
    return (
      <div className="flex justify-center bg-white border border-gray-300 rounded-sm mr-4 p-6  ">
        <img
          className="w-10 h-10 mr-4"
          src="https://web.archive.org/web/20200805062401/https://i.udemycdn.com/browse_components/value-props-unit/go_own_pace.svg"
          alt=""
        />
        <div>
          <h2 className="mb-1 text-xl font-bold">Go at your own pace</h2>
          <p className="text-gray-500 font-normal text-base">
            Enjoy lifetime access to courses on Udemy’s website and app
          </p>
        </div>
      </div>
    );
  }
}
