import { Link } from '@remix-run/react';

import { Home } from '../icons/home';
import { Movie } from '../icons/movie';
import { Search } from '../icons/search';
import { TV } from '../icons/tv';

const btnClassName = 'btn btn-circle';

const navItems = [
  { to: '/', prefetch: 'intent' as const, icon: <Home /> },
  { to: '/movies', prefetch: 'intent' as const, icon: <Movie /> },
  { to: '/tv', prefetch: 'intent' as const, icon: <TV /> },
  { to: '/search', prefetch: 'none' as const, icon: <Search /> },
];

export default function Navigation() {
  return (
    <nav className="h-full flex-none fixed">
      <ul className="flex flex-col gap-y-5 h-full p-4 bg-base-300">
        {navItems.map((navItem) => (
          <li key={navItem.to}>
            <Link className={btnClassName} to={navItem.to} prefetch={navItem.prefetch}>
              {navItem.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
