import React, { Component } from "react";

export default class BreadcrumbDetailCourses extends Component {
  render() {
    return (
      <section
        className=" my-28 bg-no-repeat bg-cover bg-center h-48 "
        style={{
          backgroundImage:
            'url("https://cyberlearn-21.web.app/img/breadcrumb.png")',
        }}
      >
        <div className="container mx-auto flex items-center">
          <h1>COURSE</h1>
          <span> HOME /COURSES/A16</span>
        </div>
      </section>
    );
  }
}
