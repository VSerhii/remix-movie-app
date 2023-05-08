import type { ProductionMedia } from '~/api/types';

import { Rating } from '../rating/rating';

type Props = {
  media: ProductionMedia;
};

export default function Card({ media }: Props) {
  return (
    <div className="w-56">
      <picture>
        <img
          className="max-w-full border-4 border-base-300 object-cover "
          src={`https://image.tmdb.org/t/p/w185/${media.poster_path}`}
          height={270}
          width={185}
        />
      </picture>
      <div className="flex flex-col items-center">
        <span className="flex">{media.title}</span>
        <Rating name={media.title || ''} value={media.vote_average} read_only />
      </div>
    </div>
  );
}
