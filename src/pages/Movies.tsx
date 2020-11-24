/** @jsxImportSource @emotion/core */
import React from 'react';
import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import { appConfig } from '../AppConfig';
import MessageBox from '../components/MessageBox';
import SearchBox from '../components/SearchBox';
import { fetcher } from '../fetcher';
import { ISearchResult, ISearchSuccess } from '../Model/SearchResult';

function Movies() {
  const [searchText, setSearchText] = React.useState('marvel');

  const { data, isLoading, error, fetchMore, canFetchMore } = useInfiniteQuery<
    ISearchResult,
    Error
  >(
    ['movies', searchText],
    (_, searchText, page = 1) => {
      return fetcher(
        `${appConfig.url}?s=${searchText}&apikey=${appConfig.apikey}&type=movie&page=${page}`
      ).then((res: ISearchResult) => {
        if (res.Response === 'True') {
          (res as ISearchSuccess).page = page + 1;
        }
        return res;
      });
    },
    {
      enabled: searchText.trim() !== '',
      getFetchMore: (lastResult) => {
        if (lastResult.Response === 'Flase') {
          return false;
        }

        let data = lastResult as ISearchSuccess;
        if (Array.isArray(data.Search) && data.Search.length < 10) {
          return false;
        }

        return data.page;
      },
      refetchOnWindowFocus: false,
    }
  );

  const renderContent = () => {
    if (isLoading) {
      return <MessageBox>Loading...</MessageBox>;
    }
    if (error) {
      return (
        <MessageBox>There is some problem while featching the data.</MessageBox>
      );
    }

    if (!data) {
      return <MessageBox>Your favourite movie did not find</MessageBox>;
    }

    if (data[0].Response === 'False') {
      return <MessageBox>Your favourite movie did not find</MessageBox>;
    }

    return (
      <article
        css={tw`mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8`}
      >
        {data.map((page, index) => (
          <React.Fragment key={index}>
            {(page as ISearchSuccess).Search.map((item) => (
              <Link
                to={`/movies/${item.imdbID}`}
                key={item.imdbID}
                css={tw`hover:outline-white hover:border-blue-300`}
              >
                <article css={tw`md:flex flex-col `}>
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
          </React.Fragment>
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
      {canFetchMore && (
        <div css={tw`mt-5 sm:mt-8 sm:flex sm:justify-center`}>
          <div
            css={tw`mt-3 sm:mt-0 sm:ml-3 mt-5 sm:mt-8 sm:flex sm:justify-center`}
          >
            <button
              onClick={() => fetchMore()}
              css={tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-100 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out`}
            >
              Fetch More
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Movies;
