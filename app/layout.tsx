import { Outlet } from '@remix-run/react';

import Navigation from './components/navigation';

export default function Layout() {
  return (
    <div className="flex items-start h-full">
      <Navigation />
      <Outlet />
    </div>
  );
}
