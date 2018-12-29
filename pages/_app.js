import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';

import store from '../store';

if (typeof window !== 'undefined') {
  require('materialize-css');
  require('materialize-css/dist/css/materialize.min.css');
}

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
