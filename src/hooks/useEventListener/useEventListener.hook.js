import { useEffect, useRef } from 'react';

export const useEventListener = (eventType, callback, element) => {
  const savedHandler = useRef(callback);

  useEffect(() => {
    savedHandler.current = callback;
  }, [callback]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;

    if (!isSupported) {
      return () => {};
    }

    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventType, eventListener);

    return () => {
      element.removeEventListener(eventType, eventListener);
    };
  }, [eventType, element]);
};
