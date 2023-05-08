import type { TvMedia } from '~/api/types';

import { Link, useLoaderData } from '@remix-run/react';

import { getTvShow, getTvShows } from '~/api/api';
import Card from '~/components/card/card';
import { Carousel } from '~/components/carousel/Carousel';
import { Divider } from '~/components/divider/divider';
import { Hero } from '~/components/hero/hero';
import { getRandomMedia } from '~/helpers/get-random-media';

function renderCarouselSlides(tvShows: TvMedia[] | undefined) {
  return tvShows?.map((tv) => (
    <Link key={tv.id} to={`/tv/${tv.id}`} prefetch="intent" className="carousel-item">
      <Card key={tv.id} media={tv} />
    </Link>
  ));
}

export async function loader() {
  const [popular, topRated] = await Promise.all([
    getTvShows({ page: 1, query: 'popular' }),
    getTvShows({ page: 1, query: 'top_rated' }),
  ]);

  const random = getRandomMedia({ collections: [popular, topRated] });
  const featured = await getTvShow({ id: random.id });

  return { featured, popular, topRated };
}

export default function TvShows() {
  const { featured, popular, topRated } = useLoaderData<typeof loader>();

  return (
    <div className="flex max-h-screen flex-col gap-4 overflow-y-scroll">
      {featured && (
        <Hero
          imgSrc={`https://image.tmdb.org/t/p/w780/${featured.backdrop_path}`}
          id={featured.id}
          title={featured.title}
          overview={featured.overview}
          originalTitle={featured.original_name}
          vote_average={featured.vote_average}
          vote_count={featured.vote_count}
        />
      )}
      <Divider label="Popular" />
      <Carousel>{renderCarouselSlides(popular?.results)}</Carousel>
      <Divider label="Top rated" />
      <Carousel>{renderCarouselSlides(topRated?.results)}</Carousel>
    </div>
  );
}
