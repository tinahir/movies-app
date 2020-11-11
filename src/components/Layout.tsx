/** @jsxImportSource @emotion/core */
import React from 'react';
import tw from 'twin.macro';
import { Header } from '../components/Header';

type Props = {
  children: JSX.Element;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div css={tw`relative bg-black min-h-screen font-sans`}>
      <div css={tw`max-w-screen-xl mx-auto`}>
        <div
          css={tw`
              relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-24 xl:pb-32`}
        >
          <Header></Header>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
