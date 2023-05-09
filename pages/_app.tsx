import '../styles/globals.css';
import type { AppProps } from 'next/app';
import tw, { styled } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 20px;
  }
`;

const AppStyle = styled.div`
  background-color: white;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <AppStyle>
        <Component {...pageProps} />
      </AppStyle>
    </>
  );
}
