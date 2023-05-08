import { Link } from '@remix-run/react';

import { Home } from '../icons/home';
import { Movie } from '../icons/movie';
import { Search } from '../icons/search';
import { TV } from '../icons/tv';

export default function Navigation() {
  return (
    <nav className="h-full flex-none fixed">
      <ul className="flex flex-col gap-y-5 h-full p-4 bg-base-300">
        <li>
          <Link className="btn btn-circle" to="/" prefetch="intent">
            <Home />
          </Link>
        </li>
        <li>
          <Link className="btn btn-circle" to="/movies" prefetch="intent">
            <Movie />
          </Link>
        </li>
        <li>
          <Link className="btn btn-circle" to="/tv" prefetch="intent">
            <TV />
          </Link>
        </li>
        <li>
          <Link className="btn btn-circle" to="/search">
            <Search />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
