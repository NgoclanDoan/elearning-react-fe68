import React, { Component } from "react";
import BenefitsCourse from "components/BenefitsCourse";
export default class ListBenefitsCourse extends Component {
  render() {
    return (
      <div className="bg-gray-200 ">
        <div
          style={{ width: "1140px" }}
          className="mx-auto mt-5 grid grid-cols-3 py-6 gap-1 "
        >
          <BenefitsCourse />
          <BenefitsCourse />
          <BenefitsCourse />
        </div>
      </div>
    );
  }
}
