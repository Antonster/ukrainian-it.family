/* eslint-disable react/prop-types */
import '@styles/globals.scss';

import { NextIntlProvider } from 'next-intl';

const MyApp = ({ Component, pageProps }) => (
  <NextIntlProvider messages={pageProps.messages}>
    <Component {...pageProps} />
  </NextIntlProvider>
);

export default MyApp;
