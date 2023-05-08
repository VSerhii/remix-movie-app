import type { Collection } from '~/api/types';

type GetRandomMedia<T> = {
  collections: Collection<T>[];
};

export const getRandomMedia = <T>({ collections }: GetRandomMedia<T>) => {
  const items = collections.flatMap((collection) => collection.results || []);
  const randomItem = items[Math.floor(Math.random() * items.length)];

  return randomItem;
};
