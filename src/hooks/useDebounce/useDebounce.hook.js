import { useEffect } from 'react';

import { useTimeout } from '../useTimeout/useTimeout.hook';

export const useDebounce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimeout(callback, delay);

  useEffect(reset, [...dependencies, reset]);

  useEffect(clear, [clear]);
};
