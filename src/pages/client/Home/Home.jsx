import React, { Component } from 'react';
import Banner from 'components/Banner';
import TabPaneCourses from 'components/TabPane';

export default class Home extends Component {
	render() {
		return (
      <div >
        <Banner />
        <div className="grid grid-cols-3 gap-1 w-full container mx-auto mt-5 ">
          <div className="bg-gray-400">
            <h3>The world’s largest selection of courses</h3>
            <p>
              Choose from over 100,000 online video courses with <br /> new
              additions published every month
            </p>
          </div>
          <div className="col-span-2 ">
            <div className="mx-4 px-5">
              <TabPaneCourses />
            </div>
          </div>
        </div>
      </div>
    );
	}
}
