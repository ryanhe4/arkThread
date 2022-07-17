import { css } from '@emotion/react'
import palette from '@lib/palette'

export const sidebarStyle = css`
  position: absolute;
  overflow: hidden;
  width: 16.375rem;
  z-index: 500;
  inset: 0px 1249px 0px 0px;
  border-right: 1px solid #d5dadb;
`

export const mainStyle = css`
  position: absolute;
  overflow: hidden;
  inset: 0px 0px 0px 262px;
  width: auto;
  
  background: ${palette.amber[50]};
`
