import '../styles/light.less';
import React from 'react';

type AppProps = {
  Component: React.ElementType;
  pageProps: unknown;
};

const App = ({ Component, pageProps }: AppProps): unknown => {
  return <Component {...pageProps} />;
};

export default App;
