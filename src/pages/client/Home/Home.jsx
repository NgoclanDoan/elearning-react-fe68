import React, { Component } from "react";
import Banner from "components/Banner";
import TabPaneCourses from "components/TabPane";
import ListBenefitsCourse from "components/BenefitsCourse/ListBenefitsCourse";
import ViewingCourse from "components/ViewingCourse";
import GetRecommendation from "components/GetRecommendation";
import TopCategories from "components/TopCategories";
import StudentSay from "components/StudentSay";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner />

        <div className="container mx-auto mt-5 ">
          <div className="flex">
            <div
              style={{ margin: "15px 0 15px 0" }}
              className="bg-gray-100 flex justify-center flex-col px-8"
            >
              <h3 className="text-lg font-bold text-gray-900">
                The world’s largest selection of courses
              </h3>
              <p className="text-base text-gray-900">
                Choose from over 100,000 online video courses with new additions
                published every month
              </p>
            </div>
            <div className="flex-auto w-4/6">
              <div className="ml-4">
                <TabPaneCourses />
              </div>
            </div>
          </div>
        </div>

        <ListBenefitsCourse />

        <ViewingCourse />

        <GetRecommendation />

        <TopCategories />

        <StudentSay />
      </div>
    );
  }
}
