/** @jsxImportSource @emotion/core */
import React, { useState } from 'react';
import tw from 'twin.macro';
import SearchIcon from '../icons/SearchIcon';

type Props = {
  onSearch: (value: string) => void;
  defaultValue: string;
};

const SearchBox: React.FunctionComponent<Props> = ({
  onSearch,
  defaultValue = '',
}) => {
  const [text, setText] = useState(defaultValue);

  const handleSearch = () => {
    onSearch(text);
  };

  return (
    <div css={tw`flex`}>
      <input
        css={tw`border-2 appearance-none bg-gray-900 rounded border-gray-300 placeholder-gray-500 py-2 px-3 mr-8 text-base text-white w-full focus:border-indigo-500 focus:outline-none `}
        placeholder="Search Movies"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></input>
      <div css={tw`rounded-md shadow`}>
        <button
          onClick={handleSearch}
          css={tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline transition duration-150 ease-in-out md:text-lg`}
        >
          <SearchIcon /> <span css={tw`ml-4`}>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
