import React, { Component } from "react";
import BreadcrumbDetailCourses from "components/BreadcrumbDetailCourses";
import InfoDetailCourses from "components/InfoDetailCourses";

export default class DetailCourses extends Component {
  render() {
    return (
      <div>
        <BreadcrumbDetailCourses />
        <InfoDetailCourses />
      </div>
    );
  }
}
