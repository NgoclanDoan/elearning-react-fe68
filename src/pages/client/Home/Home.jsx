import React, { Component } from "react";
import Banner from "components/Banner";
import TabPaneCourses from "components/TabPane";
import ListBenefitsCourse from "../../../components/BenefitsCourse/ListBenefitsCourse";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner />

        <div className="container mx-auto mt-5 ">
          <div className="flex">
            <div
              style={{ width: "447px", margin:'15px 15px 28px 0' }}
              className="bg-gray-200 flex justify-center items-center flex-col"
            >
              <h3 className="text-xl font-bold">
                The world’s largest selection of courses
              </h3>
              <p className="px-8">
                Choose from over 100,000 online video courses with <br /> new
                additions published every month
              </p>
            </div>
            <div className="flex-auto w-full">
              <div className="ml-4">
                <TabPaneCourses />
              </div>
            </div>
          </div>
        </div>

        <ListBenefitsCourse />
      </div>
    );
  }
}
