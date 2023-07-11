import type { LoaderArgs } from '@remix-run/node';

import { useLoaderData } from '@remix-run/react';

import { getMovie } from '~/api/api';
import { Hero } from '~/components/hero/hero';
import { formatCurrency, formatDate, formatRuntime } from '~/helpers/utils';

export async function loader({ params }: LoaderArgs) {
  const movie = await getMovie({ id: Number(params.id) });

  return movie;
}

export const handle = { hydrate: false };

export default function Movie() {
  const movie = useLoaderData<typeof loader>();

  return (
    <>
      <Hero
        imgSrc={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
        id={movie.id}
        title={movie.title}
        overview={movie.overview}
        originalTitle={movie.original_title}
        vote_average={movie.vote_average}
        vote_count={movie.vote_count}
      />
      <div className="flex max-w-5xl flex-row items-center gap-8">
        <div className="hidden flex-grow md:flex">
          <div className="min-w-max">
            <picture>
              <img
                alt="Poster"
                className="h-full w-80 max-w-full object-cover"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            </picture>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {movie.overview && (
            <div>
              <h2 className="mb-4 text-3xl">Storyline</h2>
              <div className="opacity-80">{movie.overview}</div>
            </div>
          )}
          <div className="grid grid-cols-[max-content_1fr] items-center gap-3 text-sm opacity-80 lg:grid-cols-[max-content_1fr_max-content_1fr]">
            {movie.media_type === 'movie' && movie.release_date && (
              <>
                <div>Released</div>
                <div>{formatDate(movie.release_date)}</div>
              </>
            )}
            {movie.runtime && (
              <>
                <div>Runtime</div>
                <div>{formatRuntime(movie.runtime)}</div>
              </>
            )}
            {movie.budget && (
              <>
                <div>Budget</div>
                <div>{formatCurrency(movie.budget)}</div>
              </>
            )}
            {movie.revenue && (
              <>
                <div>Revenue</div>
                <div>{formatCurrency(movie.revenue)}</div>
              </>
            )}
            {movie.status && (
              <>
                <div>Status</div>
                <div>{movie.status}</div>
              </>
            )}
            {movie.original_language && (
              <>
                <div>Language</div>
                <div>{movie.original_language}</div>
              </>
            )}
            {movie.production_companies && (
              <>
                <div>Production</div>
                <div>{movie.production_companies.map(({ name }) => name).join(', ')}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
