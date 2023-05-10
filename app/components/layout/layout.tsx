import type { ReactElement } from 'react';

import Navigation from '../navigation/navigation';

type Props = {
  children: ReactElement;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex items-start h-full">
      <Navigation />
      <div className="flex flex-col flex-1 w-screen h-screen relative ml-20">{children}</div>
    </div>
  );
}
