import { Link } from '@remix-run/react';

export default function Navigation() {
  return (
    <nav className="h-full flex-none">
      <ul className="flex flex-col gap-y-5 h-full p-5 bg-slate-950">
        <li>
          <Link className="btn btn-circle" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="btn btn-circle" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
