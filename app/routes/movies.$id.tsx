import type { LoaderArgs } from '@remix-run/node';

import { useLoaderData } from '@remix-run/react';

import { getMovie } from '~/api/api';
import { Hero } from '~/components/hero/hero';

export async function loader({ params }: LoaderArgs) {
  const movie = await getMovie({ id: Number(params.id) });

  return movie;
}

export default function Movie() {
  const movie = useLoaderData<typeof loader>();

  return (
    <Hero
      imgSrc={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
      id={movie.id}
      title={movie.title}
      overview={movie.overview}
      originalTitle={movie.original_title}
      vote_average={movie.vote_average}
      vote_count={movie.vote_count}
    />
  );
}
