/** @jsxImportSource @emotion/core */
import React from 'react';
import tw from 'twin.macro';

type Props = {
  children: string | JSX.Element;
};

const Center: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div css={tw`flex items-center justify-center mt-32 `}>{children}</div>
  );
};

export default Center;
