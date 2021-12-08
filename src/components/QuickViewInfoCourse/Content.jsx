import React, { Component } from "react";
import RecommendLabel from "../RecommendLabel";
import "./QuickViewInfoCourse.css";

export default class Content extends Component {
  render() {
    return (
      <div className="quick__view__box max-w-xs">
        <p className="text-xs text-gray-500">Last updated: 11/2021</p>
        <a
          href="#"
          className="text-lg font-bold whitespace-normal line-clamp-3 truncate text-gray-800 hover:text-gray-800 hover:underline"
        >
          The Complete Financial Analyst Course 2020
        </a>
        <div>
          <div className="absolute top-25 left-4">
            <RecommendLabel />
          </div>
          <span className="ml-24 text-xs text-gray-1">
            <span>
              in{" "}
              <a
                href="/web/20200805062401mp_/https://www.udemy.com/topic/financial-analysis/"
                className="text-blue-500 hover:text-blue-700"
              >
                Financial Analysis
              </a>
            </span>{" "}
            | Business
          </span>
        </div>
        <div className="flex items-center text-xs text-gray-500 py-1 whitespace-nowrap ">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-700 mr-1.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clip-rule="evenodd"
              />
            </svg>
            <span>84 lectures</span>
          </div>

          <div className="flex items-center text-xs text-gray-500 py-1 whitespace-nowrap ml-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-700 mr-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>84 lectures</span>
          </div>

          <div className="flex items-center text-xs text-gray-500 py-1 whitespace-nowrap ml-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-700 mr-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span>84 lectures</span>
          </div>
        </div>
        <sp className="line-clamp-3 truncate text-gray-600 text-base pt-2.5">
          ** #1 Best Selling Business Course! ** Everything You Need to Know
          About Business from Start-up to IPO
        </sp>
        <ul className="text-sm text-gray-600 flex-auto mt-3 mb-7 list-none">
          <li className="quick__view__item flex ">
            <div className="mb-2.5">Use SQL to query a database</div>
          </li>
          <li className="quick__view__item flex">
            <div className="mb-2.5">Use SQL to perform data analysis</div>
          </li>
          <li className="quick__view__item flex">
            <div className="mb-2.5">
              Be comfortable putting SQL and PostgreSQL on their resume
            </div>
          </li>
        </ul>

        <div className="flex items-center">
          <button className="w-full py-3 px-4 bg-red-500 hover:bg-red-700 text-white border border-transparent text-sm rounded-sm font-bold mb-0 cursor-pointer whitespace-nowrap">
            Add to cart
          </button>
          <div className="quick__view__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 ml-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 ml-6 text-red-500 quick__view__icon__mask"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
