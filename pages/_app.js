import React from 'react';
import App, { Container } from 'next/app';
import UserProvider from '../components/UserContext';
import BodyStyle from '../components/style/BodyStyle';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <UserProvider>
          <BodyStyle>
            <Component {...pageProps} />
          </BodyStyle>
        </UserProvider>
      </Container>
    );
  }
}

export default MyApp;
