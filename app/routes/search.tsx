import type { LoaderArgs } from '@remix-run/node';

import { Form, Link, useLoaderData } from '@remix-run/react';

import { search } from '~/api/api';
import Card from '~/components/card/card';

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query');

  const { results } = await search({ page: 1, query: query || '' });

  return results;
}

export default function Search() {
  const searchResult = useLoaderData<typeof loader>();

  return (
    <div className="m-2">
      <Form method="get" name="search" action="/search">
        <input
          type="text"
          name="query"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn mx-4" type="submit">
          Search
        </button>
      </Form>
      <div className="grid gap-2 grid-cols-3 grid-rows-3 mt-4">
        {searchResult?.map((item) => {
          const mediaType = item.media_type === 'movie' ? 'movies' : item.media_type;

          return (
            <Link
              key={item.id}
              to={`/${mediaType}/${item.id}`}
              prefetch="intent"
              className="carousel-item"
            >
              <Card media={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
