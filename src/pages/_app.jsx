/* eslint-disable react/prop-types */
import '@styles/globals.scss';

import { StoreProvider } from '@components';
import { useHydrate } from '@hooks';
import { NextIntlProvider } from 'next-intl';

const MyApp = ({ Component, pageProps }) => {
  const store = useHydrate(pageProps.initialZustandState);

  return (
    <StoreProvider store={store}>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </StoreProvider>
  );
};

export default MyApp;
