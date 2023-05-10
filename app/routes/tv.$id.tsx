import type { LoaderArgs } from '@remix-run/node';

import { useLoaderData } from '@remix-run/react';

import { getTvShow } from '~/api/api';
import { Hero } from '~/components/hero/hero';

export async function loader({ params }: LoaderArgs) {
  const tv = await getTvShow({ id: Number(params.id) });

  return tv;
}

export const handle = { hydrate: false };

export default function Tv() {
  const tv = useLoaderData<typeof loader>();

  return (
    <Hero
      imgSrc={`https://image.tmdb.org/t/p/w780/${tv.backdrop_path}`}
      id={tv.id}
      title={tv.title}
      overview={tv.overview}
      originalTitle={tv.original_name}
      vote_average={tv.vote_average}
      vote_count={tv.vote_count}
    />
  );
}
