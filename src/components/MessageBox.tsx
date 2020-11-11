/** @jsxImportSource @emotion/core */
import React from 'react';
import tw from 'twin.macro';
import Center from '../components/Center';

type Props = {
  children: string;
};

const MessageBox: React.FunctionComponent<Props> = ({ children }) => (
  <Center>
    <div
      css={tw`text-4xl tracking-tight leading-10 font-extrabold text-white sm:leading-none text-4xl`}
    >
      {children}
    </div>
  </Center>
);

export default MessageBox;
