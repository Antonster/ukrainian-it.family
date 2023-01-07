import { StoreContext } from '@context';
import { useContext } from 'react';

export const useStore = (selector, eqFn) => {
  const store = useContext(StoreContext);
  const values = store(selector, eqFn);

  return values;
};
