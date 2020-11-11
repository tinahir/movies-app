/** @jsxImportSource @emotion/core */
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import MessageBox from '../components/MessageBox';
import SearchBox from '../components/SearchBox';
import { fetcher } from '../fetcher';
import {
  ISearchFail,
  ISearchResult,
  ISearchSuccess,
} from '../Model/SearchResult';

function Movies() {
  const [searchText, setSearchText] = React.useState('marvel');

  const { data, isLoading, error } = useQuery<ISearchResult, Error>(
    ['movies', searchText],
    (_, searchText, page = 1) => {
      console.log(page);
      if (searchText) {
        return fetcher(
          `http://www.omdbapi.com/?s=${searchText}&apikey=78e4292d&type=movie`
        );
      }
      return Promise.resolve(null);
    },
    {
      enabled: searchText.trim() !== '',
    }
  );

  const renderContent = () => {
    if (isLoading) {
      return <MessageBox>Loading...</MessageBox>;
    }

    if (error) {
      return <MessageBox>{error.message}</MessageBox>;
    }

    if (!data) {
      return <MessageBox>Your favourite movie did not find</MessageBox>;
    }

    if (data.Response === 'False') {
      return <MessageBox>{(data as ISearchFail).Error}</MessageBox>;
    }

    return (
      <article
        css={tw`mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8`}
      >
        {(data as ISearchSuccess).Search.map((item) => (
          <Link to={`/movies/${item.imdbID}`} key={item.imdbID}>
            <article css={tw`md:flex flex-col shadow`}>
              {item.Poster === 'N/A' ? (
                <div
                  css={tw`md:flex-shrink-0 flex items-center justify-center text-2xl font-extrabold	h-64 w-full bg-gray-900 text-white text-opacity-30`}
                >
                  No Poster
                </div>
              ) : (
                <figure css={tw`md:flex-shrink-0 bg-gray-900`}>
                  <img
                    css={tw`object-cover h-64 w-full`}
                    alt={item.Title}
                    src={item.Poster}
                    loading="eager"
                  ></img>
                </figure>
              )}

              <div css={tw`p-4`}>
                <div css={tw` tracking-wide text-sm text-white font-bold`}>
                  {item.Title}
                </div>

                <p css={tw`mt-2 text-gray-600 mt-1`}>{item.Year}</p>
              </div>
            </article>
          </Link>
        ))}
      </article>
    );
  };

  const handleSearch = React.useCallback((value: string) => {
    setSearchText(value);
  }, []);

  return (
    <div css={tw`mt-10 mx-auto max-w-screen-xl px-4`}>
      <SearchBox defaultValue="marvel" onSearch={handleSearch}></SearchBox>
      {renderContent()}
    </div>
  );
}

export default Movies;
