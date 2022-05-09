import type { AppProps } from 'next/app'
import Applayout from '@layouts/Applayout'
import Header from '@components/Header'
import { css, Global } from '@emotion/react'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Applayout>
      <Applayout.Top>
        <Header />
      </Applayout.Top>
      <Applayout.Main>
        <Component {...pageProps} />
      </Applayout.Main>
    </Applayout>
    <Global styles={globalStyle} />
  </>
}

const globalStyle = css`
  html, body, #__next {
    height: 100%;
  }

  html {
    box-sizing: border-box;

    * {
      box-sizing: inherit;
      margin: 0;
      padding: 0;

      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
  }
`

export default MyApp
