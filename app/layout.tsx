import { Outlet } from '@remix-run/react';

import Navigation from './components/navigation/navigation';

export default function Layout() {
  return (
    <div className="flex items-start h-full">
      <Navigation />
      <div className="flex flex-col flex-1 w-screen h-screen relative ml-20">
        <Outlet />
      </div>
    </div>
  );
}
