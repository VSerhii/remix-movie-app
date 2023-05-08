export type TvMedia = {
  backdrop_path?: string | null;
  first_air_date?: string[];
  genre_ids?: number[];
  id: number;
  media_type?: 'tv';
  name?: string;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string | null;
  title?: string;
  vote_average?: number;
  vote_count?: number;
};

export type MovieMedia = {
  adult?: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[];
  id: number;
  media_type?: 'movie';
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string | null;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export type ProductionMedia = TvMedia | MovieMedia;

export type PersonMedia = {
  adult?: boolean;
  id: number;
  job?: string;
  known_for?: ProductionMedia[];
  media_type?: 'person';
  name?: string;
  popularity?: number;
  profile_path?: string;
};

export type PersonMediaDetails = PersonMedia & {
  biography?: string;
  birthday?: string;
  combined_credits?: {
    cast: ProductionMedia[];
    crew: ProductionMedia[];
  };
  deathday?: string;
  external_ids?: Record<string, string>;
  homepage?: string;
  known_for_department?: string;
  place_of_birth?: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type Production = {
  id: number;
  logo_path?: string | null;
  name?: string;
  origin_country?: string;
};

export type Video = {
  id?: string;
  iso_3166_1?: string;
  iso_639_1?: string;
  key?: string;
  name?: string;
  official?: boolean;
  published_at?: string;
  site?: string;
  size?: number;
  type?: string;
};

export type Image = {
  aspect_ratio?: number;
  file_path?: string;
  height?: number;
  iso_639_1?: string | null;
  vote_average?: number;
  vote_count?: number;
  width?: number;
};

export type MediaDetails = {
  budget?: number;
  credits?: {
    cast?: PersonMedia[];
    crew?: PersonMedia[];
  };
  external_ids?: Record<string, string>;
  genres?: Genre[];
  homepage?: string;
  images?: {
    backdrops?: Image[];
    logos?: Image[];
    posters?: Image[];
  };
  production_companies?: Production[];
  revenue?: number;
  runtime?: number;
  status?: string;
  videos?: {
    results?: Video[];
  };
};

export type TvMediaDetails = TvMedia & MediaDetails;

export type MovieMediaDetails = MovieMedia & MediaDetails;

export type MediaType = 'movie' | 'tv' | 'person';

export type Collection<T> = {
  page?: number;
  results?: T[];
  total_pages?: number;
  total_results?: number;
};
