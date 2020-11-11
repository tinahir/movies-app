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
