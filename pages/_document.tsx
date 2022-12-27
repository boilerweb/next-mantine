import {createGetInitialProps} from '@mantine/next';
import Document, {Head, Html, Main, NextScript} from 'next/document';

const getInitialProps = createGetInitialProps();

export default class extends Document {
  public static getInitialProps = getInitialProps;

  public render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
