import type { ProductionMedia } from '~/api/types';

import { Rating } from '../rating/rating';

type Props = {
  media: ProductionMedia;
};

export default function Card({ media }: Props) {
  return (
    <div className="flex flex-col justify-items-center	items-center text-center	w-56">
      <picture>
        <img
          loading="lazy"
          className="max-w-full border-4 border-base-300 object-cover "
          src={`https://image.tmdb.org/t/p/w185/${media.poster_path}`}
          height={270}
          width={185}
        />
      </picture>
      <span className="flex">{media.title || media.original_name}</span>
      <Rating name={media.title || ''} value={media.vote_average} read_only />
    </div>
  );
}
