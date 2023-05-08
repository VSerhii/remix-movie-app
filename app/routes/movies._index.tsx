import type { MovieMedia } from '~/api/types';

import { Link, useLoaderData } from '@remix-run/react';

import { getMovie, getMovies } from '~/api/api';
import Card from '~/components/card/card';
import { Carousel } from '~/components/carousel/Carousel';
import { Hero } from '~/components/hero/hero';
import { getRandomMedia } from '~/helpers/get-random-media';

function renderCarouselSlides(movies: MovieMedia[] | undefined) {
  return movies?.map((movie) => (
    <Link to={`/movies/${movie.id}`} prefetch="intent" className="carousel-item">
      <Card key={movie.id} media={movie} />
    </Link>
  ));
}

export async function loader() {
  const [popular, topRated, nowPlaying] = await Promise.all([
    getMovies({ page: 1, query: 'popular' }),
    getMovies({ page: 1, query: 'top_rated' }),
    getMovies({ page: 1, query: 'now_playing' }),
  ]);

  const random = getRandomMedia({ collections: [popular, topRated, nowPlaying] });
  const featured = await getMovie({ id: random.id });

  return { featured, nowPlaying, popular, topRated };
}

export default function Movies() {
  const { featured, nowPlaying, popular, topRated } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="flex max-h-screen flex-col gap-4 overflow-y-scroll">
        {featured && (
          <Hero
            imgSrc={`https://image.tmdb.org/t/p/w780/${featured.backdrop_path}`}
            id={featured.id}
            title={featured.title}
            overview={featured.overview}
            originalTitle={featured.original_title}
            vote_average={featured.vote_average}
            vote_count={featured.vote_count}
          />
        )}
        <div className="divider"> Now Plaing</div>
        <Carousel>{renderCarouselSlides(nowPlaying?.results)}</Carousel>
        <div className="divider">Popular</div>
        <Carousel>{renderCarouselSlides(popular?.results)}</Carousel>
        <div className="divider">Top rated</div>
        <Carousel>{renderCarouselSlides(topRated?.results)}</Carousel>
      </div>
    </>
  );
}
