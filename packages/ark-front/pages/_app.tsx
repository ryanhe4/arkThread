import type { AppProps } from 'next/app'
import Applayout from '@layouts/Applayout'
import { css, Global } from '@emotion/react'
import Sidebar from '@components/Sidebar'

function Application({ Component, pageProps }: AppProps) {
  return <>
    <Applayout>
      <Applayout.Side>
        <Sidebar />
      </Applayout.Side>
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

      word-break: keep-all;
      word-wrap: break-word;

      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    button {
      border: none;
      cursor: pointer;
      background-color: transparent;
      user-select: none;
    }
  }
`

export default Application
