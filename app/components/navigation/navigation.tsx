import { Link } from '@remix-run/react';

import { Home } from '../icons/home';
import { Movie } from '../icons/movie';
import { Search } from '../icons/search';
import { TV } from '../icons/tv';

const btnClassName = 'btn btn-circle';

const navItems = [
  { to: '/', icon: <Home /> },
  { to: '/movies', icon: <Movie /> },
  { to: '/tv', icon: <TV /> },
  { to: '/search', icon: <Search /> },
];

export default function Navigation() {
  return (
    <nav className="h-full flex-none fixed">
      <ul className="flex flex-col gap-y-5 h-full p-4 bg-base-300">
        {navItems.map(({ icon, to }) => (
          <li key={to}>
            <Link className={btnClassName} to={to}>
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
