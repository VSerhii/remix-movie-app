import type { LoaderArgs } from '@remix-run/node';

import { useLoaderData } from '@remix-run/react';

import { getTvShow } from '~/api/api';
import { Hero } from '~/components/hero/hero';
import { formatCurrency, formatDate, formatRuntime } from '~/helpers/utils';

export async function loader({ params }: LoaderArgs) {
  const tv = await getTvShow({ id: Number(params.id) });

  return tv;
}

export const handle = { hydrate: false };

export default function Tv() {
  const tv = useLoaderData<typeof loader>();

  return (
    <>
      <Hero
        imgSrc={`https://image.tmdb.org/t/p/w780/${tv.backdrop_path}`}
        id={tv.id}
        title={tv.title}
        overview={tv.overview}
        originalTitle={tv.original_name}
        vote_average={tv.vote_average}
        vote_count={tv.vote_count}
      />
      <div className="flex max-w-5xl flex-row items-center gap-8">
        <div className="hidden flex-grow md:flex">
          <div className="min-w-max">
            <picture>
              <img
                alt="Poster"
                className="h-full w-80 max-w-full object-cover"
                src={`https://image.tmdb.org/t/p/original/${tv.poster_path}`}
              />
            </picture>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {tv.overview && (
            <div>
              <h2 className="mb-4 text-3xl">Storyline</h2>
              <div className="opacity-80">{tv.overview}</div>
            </div>
          )}
          <div className="grid grid-cols-[max-content_1fr] items-center gap-3 text-sm opacity-80 lg:grid-cols-[max-content_1fr_max-content_1fr]">
            {tv.media_type === 'tv' && tv.release_date && (
              <>
                <div>Released</div>
                <div>{formatDate(tv.release_date)}</div>
              </>
            )}
            {tv.runtime && (
              <>
                <div>Runtime</div>
                <div>{formatRuntime(tv.runtime)}</div>
              </>
            )}
            {tv.budget && (
              <>
                <div>Budget</div>
                <div>{formatCurrency(tv.budget)}</div>
              </>
            )}
            {tv.revenue && (
              <>
                <div>Revenue</div>
                <div>{formatCurrency(tv.revenue)}</div>
              </>
            )}
            {tv.status && (
              <>
                <div>Status</div>
                <div>{tv.status}</div>
              </>
            )}
            {tv.original_language && (
              <>
                <div>Language</div>
                <div>{tv.original_language}</div>
              </>
            )}
            {tv.production_companies && (
              <>
                <div>Production</div>
                <div>{tv.production_companies.map(({ name }) => name).join(', ')}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
