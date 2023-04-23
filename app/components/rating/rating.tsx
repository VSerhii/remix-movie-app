import { getRating } from '~/helpers/get-rating';

type Props = {
  name: string;
  read_only?: boolean;
  value: number | undefined;
};

export function Rating({ name, read_only, value }: Props) {
  if (value === undefined) {
    return null;
  }

  const rating = getRating(value);

  return (
    <div className="tooltip tooltip-accent" data-tip={`${rating}/10`}>
      <div className="rating rating-md rating-half -ml-2">
        <input
          className="rating-hidden disabled:cursor-default"
          disabled={read_only}
          name={name}
          type="radio"
          value="0"
        />
        {Array.from({ length: 10 }, (_, index) => {
          const halfClassName = index % 2 === 0 ? 'mask-half-1' : 'mask-half-2';
          const radioValue = index + 1;

          return (
            <input
              checked={radioValue === rating}
              className={`mask mask-star-2 bg-orange-400 ${halfClassName} disabled:cursor-default`}
              disabled={read_only}
              key={index}
              name={name}
              type="radio"
              value={radioValue}
            />
          );
        })}
      </div>
    </div>
  );
}
