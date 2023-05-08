import type { LoaderArgs } from '@remix-run/node';

import { Form, Link, useLoaderData } from '@remix-run/react';

import { search } from '~/api/api';

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
        <input type="text" name="query" placeholder="Type here" className="input w-full max-w-xs" />
        <button className="btn mx-4" type="submit">
          Search
        </button>
      </Form>
      <div className="flex flex-col justify-center">
        {searchResult?.map((item, index) => (
          <Link className="max-w-lg" key={`${item.title}${index}`} to={`/movies/${item.id}`}>
            <div>{item.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
