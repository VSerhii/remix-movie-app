import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Carousel({ children }: Props) {
  return (
    <section>
      <div className="relative">
        <div className="overflow-y-auto px-8 py-4">
          <div className="carousel flex w-max flex-row gap-2">{children}</div>
        </div>
      </div>
    </section>
  );
}
