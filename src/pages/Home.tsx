/** @jsxImportSource @emotion/core */
import React from 'react';
import tw from 'twin.macro';
import LinkButton from '../components/LinkButton';

const Home: React.FunctionComponent = () => {
  return (
    <main
      css={tw`mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8`}
    >
      <div css={tw`sm:text-center lg:text-left`}>
        <h2
          css={tw`text-4xl tracking-tight leading-10 font-extrabold text-indigo-100 sm:text-5xl sm:leading-none md:text-6xl`}
        >
          Search <br css={tw`xl:hidden`} />
          <span css={tw`text-indigo-600`}>
            Unlimited movies, TV shows and more.
          </span>
        </h2>
        <p
          css={tw`mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0`}
        >
          Search thousands of shows and movies, with free.
        </p>
        <div css={tw`mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start`}>
          <LinkButton url="/movies">Browse </LinkButton>
        </div>
      </div>
    </main>
  );
};

export default Home;
