import { useEffect } from 'react';

import usePwa from './usePwa';

interface Options {
  fixed: boolean;
};

const defaultOptions: Options = { fixed: false };

const usePwaAppSize = (
  width: number = 800,
  height: number = 800,
  options: Options = defaultOptions,
) => {
  const { isStandalone } = usePwa();

  useEffect(() => {
    const resizeWindow = (): void => window.resizeTo(width, height);

    if (isStandalone) {
      window.addEventListener('load', resizeWindow);
      if (options.fixed) {
        window.addEventListener('resize', resizeWindow);
      }
    }

    return () => {
      window.removeEventListener('load', resizeWindow);
      if (options.fixed) {
        window.removeEventListener('resize', resizeWindow);
      }
    };
  }, [isStandalone]);
};

export default usePwaAppSize;
