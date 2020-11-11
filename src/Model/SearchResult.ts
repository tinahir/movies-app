import { IMovie } from './Movie';

export interface ISearchSuccess {
  Response: string;
  Search: Array<Pick<IMovie, 'Poster' | 'Title' | 'Year' | 'imdbID'>>;
  totalResults: number;
  page: number;
}

export interface ISearchFail {
  Response: string;
  Error: string;
}

export type ISearchResult = ISearchSuccess | ISearchFail;
