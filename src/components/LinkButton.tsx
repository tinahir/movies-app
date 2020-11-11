/** @jsxImportSource @emotion/core */
import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

type Props = {
  url: string;
  children: string | JSX.Element;
};

const LinkButton: React.FunctionComponent<Props> = ({
  children,
  url = '/',
}) => {
  return (
    <div css={tw`rounded-md shadow`}>
      <Link
        to={url}
        css={tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 focus:outline-none focus:border-indigo-700  transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10`}
      >
        {children}
      </Link>
    </div>
  );
};

export default LinkButton;
