import type {
  Collection,
  MovieMedia,
  MovieMediaDetails,
  ProductionMedia,
  TvMedia,
  TvMediaDetails,
} from './types';

const baseURL = 'https://api.themoviedb.org/3';

const fetcher = async <T = unknown>(
  path: string,
  search: Record<string, string> = {},
): Promise<T> => {
  const params = new URLSearchParams({
    ...search,
    api_key: 'f9eeb3288a78a47d22dd4a5401fd8809',
  });

  const url = `${baseURL}/${path}?${params}`;
  const response = await fetch(url);

  if (!response.ok) {
    console.error(url);
    throw new Error(response.statusText);
  }

  return response.json() as T;
};

type GetMovie = {
  id: number;
};

export const getMovie = async ({ id }: GetMovie) => {
  const result = await fetcher<MovieMediaDetails>(`movie/${id}`, {
    append_to_response: 'videos,credits,images,external_ids,release_dates',
    include_image_language: 'en',
  });

  return { ...result, media_type: 'movie' as const };
};

type GetMovies = {
  page: number;
  query: string;
};

export const getMovies = async ({ page, query }: GetMovies) => {
  const result = await fetcher<Collection<MovieMedia>>(`movie/${query}`, {
    page: String(page),
  });

  const results = result.results?.map((item) => ({
    ...item,
    media_type: 'movie' as const,
  }));

  return { ...result, results };
};

type GetTvShow = {
  id: number;
};

export const getTvShow = async ({ id }: GetTvShow) => {
  const result = await fetcher<TvMediaDetails>(`tv/${id}`, {
    append_to_response: 'videos,credits,images,external_ids,content_ratings',
    include_image_language: 'en',
  });

  return { ...result, media_type: 'tv' as const };
};

type GetTvShows = {
  page: number;
  query: string;
};

export const getTvShows = async ({ page, query }: GetTvShows) => {
  const result = await fetcher<Collection<TvMedia>>(`tv/${query}`, {
    page: String(page),
  });

  const results = result.results?.map((item) => ({
    ...item,
    media_type: 'tv' as const,
  }));

  return { ...result, results };
};

type Search = {
  page: number;
  query: string;
};

export const search = ({ page, query }: Search) => {
  return fetcher<Collection<ProductionMedia>>('search/multi', {
    page: String(page),
    query,
  });
};
