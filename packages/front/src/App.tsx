import React from 'react'
import AppLayout from './components/AppLayout'
import { css, Global } from '@emotion/react'
import HeaderNav from './components/HeaderNav'

function App() {
  return (
    <>
      <AppLayout>
        <AppLayout.TopNav><HeaderNav /></AppLayout.TopNav>
        <AppLayout.MainBody>
          <AppLayout.Side>side</AppLayout.Side>
          <AppLayout.Main>main</AppLayout.Main>
        </AppLayout.MainBody>
        <AppLayout.Footer>footer</AppLayout.Footer>
      </AppLayout>
      <Global styles={globalStyle} />
    </>
  )
}

const globalStyle = css`
  html,
  body,
  #root {
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;

    * {
      box-sizing: inherit;
      margin: 0;
      padding: 0;

      a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
        border: 0;
        vertical-align: baseline;
        font-size: 100%;
      }
    }
  }
`

export default App
