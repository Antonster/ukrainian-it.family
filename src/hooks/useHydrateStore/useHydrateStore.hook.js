import { initializeStore } from '@store';
import { useMemo } from 'react';

export function useHydrate(initialState) {
  const state = typeof initialState === 'string' ? JSON.parse(initialState) : initialState;
  const store = useMemo(() => initializeStore(state), [state]);
  return store;
}
