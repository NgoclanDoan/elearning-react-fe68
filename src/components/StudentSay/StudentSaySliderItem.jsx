import React, { Component } from "react";

export default class StudentSaySliderItem extends Component {
  render() {
    return (
      <div>
        <div
          className="mr-4 bg-white rounded flex flex-col p-8 h-full"
          style={{
            boxShadow: "0 1px 3px 0 rgb(20 23 28 0.15)",
            minHeight: "260px",
          }}
        >
          <div className="flex items-center">
            <img
              src="http://web.archive.org/web/20200716063442/https://i.udemycdn.com/user/100x100/8872940_27b4_3.jpg"
              alt="http://web.archive.org/web/20200716063442/https://i.udemycdn.com/user/100x100/8872940_27b4_3.jpg"
              className="w-16 h-16 rounded-full mr-5"
            />
            <h3 className="font-bold text-base">Borivoje</h3>
          </div>
          <p className="mt-5 text-base">
            Udemy is a life saver. I don't have the time or money for a college
            education. My goal is to become a freelance web developer, and
            thanks to Udemy, I'm really close.
          </p>
        </div>
      </div>
    );
  }
}
