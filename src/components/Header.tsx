/** @jsxImportSource @emotion/core */
import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

export const Header = () => {
  return (
    <div css={tw`relative pt-6 px-4 sm:px-6 lg:px-8`}>
      <nav
        css={tw`relative flex items-center justify-between sm:h-10 lg:justify-start`}
      >
        <div css={tw`flex items-center flex-grow flex-shrink-0 lg:flex-grow-0`}>
          <div css={tw`flex items-center justify-between w-full md:w-auto`}>
            <Link to="/" aria-label="Home">
              <img
                css={tw`h-8 w-auto sm:h-10`}
                src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                alt="Logo"
              />
            </Link>
            <div css={tw`-mr-2 flex items-center md:hidden`}>
              <button
                type="button"
                css={tw`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out`}
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
              >
                <svg
                  css={tw`h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div css={tw`hidden md:block md:ml-10 md:pr-4`}>
          <Link
            to="/"
            css={tw`font-medium text-white hover:text-indigo-600 transition duration-150 ease-in-out`}
          >
            Home
          </Link>
          <Link
            to="/movies"
            css={tw`ml-8 font-medium text-white hover:text-indigo-600 transition duration-150 ease-in-out`}
          >
            Browse
          </Link>
        </div>
      </nav>
    </div>
  );
};
