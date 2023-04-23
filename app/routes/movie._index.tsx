import { Link, Outlet, useLoaderData } from '@remix-run/react';

import { getMovies } from '~/api/tmdb';

export async function loader() {
  const movies = await getMovies({ page: 1, query: 'popular' });

  return movies.results;
}

export default function Movie() {
  const movies = useLoaderData<typeof loader>();

  return (
    <div>
      <div className="flex flex-col justify-center">
        {movies.map((item) => (
          <Link className="max-w-lg" key={item.original_title} to={`/movie/${item.id}`}>
            <div>{item.original_title}</div>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
