import React, { Component } from "react";
import Content from "./Content";
import SideBar from "./SideBar";

export default class InfoDetailCourses extends Component {
  render() {
    return (
      <section className="container w-full mx-auto">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <Content />
          </div>
          <div>
            <SideBar />
          </div>
        </div>
      </section>
    );
  }
}
