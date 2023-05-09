import '../styles/globals.css';
import type { AppProps } from 'next/app';
import tw, { styled } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AppStyle>
    </>
  );
}
