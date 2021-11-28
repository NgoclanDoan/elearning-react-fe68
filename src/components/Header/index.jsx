import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav
          id="header"
          className="fixed w-full z-30 top-0 text-black bg-white  "
        >
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
            <div className=" flex items-center">
              <a
                className="toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 fill-current inline text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
                LUXE
              </a>
            </div>
            <div className="block lg:hidden pr-4">
              <button
                id="nav-toggle"
                className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                <svg
                  className="fill-current h-6 w-6"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
              id="nav-content"
            >
              <ul className="list-reset lg:flex justify-center flex-1 items-center">
                <li className="mr-3">
                  <a
                    className="inline-block py-2 px-4 text-black font-bold no-underline"
                    href="#"
                  >
                    Active
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                    href="#"
                  >
                    link
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                    href="#"
                  >
                    link
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white inline-block mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <button
                id="navAction"
                className=" hover:bg-opacity-85  bg-white border-2 border-gray-600 text-gray-800 font-bold rounded-md mt-4 lg:mt-0 focus:outline-none focus:shadow-outline transform transition  duration-300 ease-in-out w-20 h-8 mx-1 "
              >
                Log In
              </button>
              <button
                id="navAction"
                className=" hover:bg-opacity-85 text-white border-2 border-red-600 bg-red-600 font-bold rounded-md mt-4 lg:mt-0 focus:outline-none focus:shadow-outline transform transition  duration-300 ease-in-out w-20 h-8 mx-1 "
              >
                Sign Up
              </button>
            </div>
          </div>
          <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
      </div>
    );
  }
}
