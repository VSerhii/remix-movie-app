import { Rating } from '../rating/rating';

type Props = {
  id: number;
  imgSrc: string;
  originalTitle?: string;
  overview?: string;
  title?: string;
  vote_average?: number;
  vote_count?: number;
};

export function Hero({
  id,
  imgSrc,
  originalTitle,
  overview,
  title,
  vote_average,
  vote_count,
}: Props) {
  return (
    <section className="bg-black">
      <div className="relative aspect-square md:aspect-[3/2] lg:aspect-[25/9]">
        <div className="absolute bottom-0 right-0 top-0 lg:left-1/3">
          <picture>
            <img
              loading="lazy"
              alt={title || originalTitle}
              className="h-full w-full max-w-full object-cover"
              src={imgSrc}
            />
          </picture>
        </div>
        <div className="absolute bottom-0 left-0 flex flex-col gap-2 bg-gradient-to-t from-black via-black to-transparent p-9 lg:w-2/3 lg:bg-gradient-to-r lg:px-24">
          <h1 className="mt-2 text-4xl text-white lg:text-5xl">{title || originalTitle}</h1>
          <div>
            <div className="flex flex-row gap-4">
              <Rating value={vote_average} name={`rating-${id}`} read_only />
              <div className="text-sm opacity-80">{`${vote_count} Reviews`}</div>
            </div>
          </div>
          <div>{overview}</div>
        </div>
      </div>
    </section>
  );
}
