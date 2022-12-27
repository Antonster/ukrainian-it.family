import { useEffect, useState } from 'react';

export const useParentSize = (ref) => {
  const [size, setSize] = useState();

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect));
    observer.observe(ref.current.offsetParent);

    return () => observer.disconnect();
  }, [ref]);

  return size;
};
