import { useEffect, useState } from 'react';

import { useEventListener } from '../useEventListener/useEventListener.hook';

export const useWindowSize = () => {
  const [browserWindow, setBrowserWindow] = useState();
  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    setBrowserWindow(window);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEventListener(
    'resize',
    () => {
      setWindowSize({
        width: browserWindow.innerWidth,
        height: browserWindow.innerHeight,
      });
    },
    browserWindow,
  );

  return windowSize;
};
