/** @jsxImportSource @emotion/core */
import React from 'react';
import tw from 'twin.macro';
import { useQuery } from 'react-query';
import { fetcher } from '../fetcher';
import { useParams } from 'react-router';
import { IMovie } from '../Model/Movie';
import MessageBox from '../components/MessageBox';
import LeftArrowIcon from '../icons/LeftArraow';
import { Link } from 'react-router-dom';
import { appConfig } from '../AppConfig';

function Movie() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery<IMovie>(
    ['movie', id],
    (_, id: string) => {
      return fetcher(`${appConfig.url}?i=${id}&apikey=${appConfig.apikey}`);
    }
  );

  if (isLoading) {
    return <MessageBox>Loading...</MessageBox>;
  }

  if (!data) {
    return <MessageBox>Movie has been not found</MessageBox>;
  }

  if (error) {
    return (
      <MessageBox>There is some problem while featching the data</MessageBox>
    );
  }

  return (
    <div css={tw`mt-10 mx-auto max-w-screen-xl px-4`}>
      <Link
        to="/movies"
        css={tw` flex items-center text-white text-sm text-opacity-40 text-xl`}
      >
        <LeftArrowIcon />
        Back
      </Link>
      <article css={tw`md:flex shadow sm:mt-8`}>
        <figure css={tw`md:flex-shrink-0`}>
          {data.Poster === 'N/A' ? (
            <div
              css={tw`md:flex-shrink-0 flex items-center justify-center text-2xl font-extrabold	h-full w-64 bg-gray-900 text-white text-opacity-30`}
            >
              No Poster
            </div>
          ) : (
            <figure css={tw`md:flex-shrink-0 bg-gray-900`}>
              <img
                css={tw`h-full`}
                alt={data.Title}
                src={data.Poster}
                loading="eager"
              ></img>
            </figure>
          )}
        </figure>
        <div css={tw`mt-4 md:mt-0 md:ml-12`}>
          <h2
            css={tw`text-4xl tracking-tight leading-10 font-extrabold text-white sm:leading-none text-5xl`}
          >
            {data.Title}
          </h2>

          <p css={tw`mt-3 text-white text-sm text-opacity-40 font-semibold`}>
            <span>{data.Runtime}</span> <span css={tw`mx-3`}>|</span>
            <span>{data.Year}</span>
            <span css={tw`mx-3`}>|</span>
            <span>{data.Language}</span>
            <span css={tw`mx-3`}>|</span>
            <span>{data.Country}</span>
          </p>
          <p css={tw`mt-8 text-white`}>{data.Plot}</p>

          <p css={tw`mt-4 text-white`}>
            <span css={tw`text-white text-opacity-40`}>Starring</span>{' '}
            {data.Actors}
          </p>
          <p css={tw`mt-4 text-white`}>
            <span css={tw`text-white text-opacity-40`}>Created by</span>{' '}
            {data.Director}
          </p>
          <p css={tw`mt-4 text-white`}>
            <span css={tw`text-white text-opacity-40`}>Genre</span> {data.Genre}{' '}
          </p>
          <p css={tw`mt-4 text-white`}>
            {' '}
            <span css={tw`text-white text-opacity-40`}>Produce by</span>{' '}
            {data.Production}
          </p>
          <p css={tw`mt-4 text-white`}>
            {' '}
            <span css={tw`text-white text-opacity-40`}>
              Realeased Date
            </span>{' '}
            {data.Released}
          </p>
        </div>
      </article>
    </div>
  );
}

export default Movie;
