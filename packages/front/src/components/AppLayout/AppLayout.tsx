import { css } from '@emotion/react'

export type AppLayoutProps = {
  children: React.ReactNode
}
export default function AppLayout({ children }: AppLayoutProps) {
  return <div css={layoutStyle}>{children}</div>
};

export type TopNavProps = {
  children: React.ReactNode
}

function TopNav({ children }: TopNavProps) {
  return <nav css={topNavStyle}>{children}</nav>
}

export type MainBodyProps = {
  children: React.ReactNode
}

function MainBody({ children }: MainBodyProps) {
  return <div css={mainBodyStyle}>{children}</div>
}

export type SideProps = {
  children: React.ReactNode
}

function Side({ children }: SideProps) {
  return <div css={sideNavStyle}>{children}</div>
}

export type MainProps = {
  children: React.ReactNode
}

function Main({ children }: MainProps) {
  return <main css={mainStyle}>{children}</main>
}

export type FooterProps = {
  children: React.ReactNode
}

function Footer({ children }: FooterProps) {
  return <div css={footerStyle}>{children}</div>
}


AppLayout.TopNav = TopNav
AppLayout.MainBody = MainBody
AppLayout.Side = Side
AppLayout.Main = Main
AppLayout.Footer = Footer

const layoutStyle = css`
  display: flex;
  flex-flow: column nowrap !important;
  height: 100% !important;
`

const topNavStyle = css`
  z-index: 1000;
  flex-shrink: 0 !important;
  height: 5rem;
  background: purple;
`
const sideNavStyle = css`
  width: 24rem;
  background: aqua;
`

const mainBodyStyle = css`
  display: flex !important;
  flex-wrap: nowrap !important;
  position: relative !important;
  overflow: hidden !important;
  height: 100% !important;
`
const mainStyle = css`
  width: 100% !important;
  height: 100% !important;
  flex-grow: 1 !important;
  display: flex !important;
  flex-direction: column !important;
  overflow: hidden !important;
  position: relative !important;
  background: green;
`
const footerStyle = css`
  position: relative;
  border-radius: 0.4rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.9) ,0 0px 2px rgba(0,0,0,0.9) !important;
  padding: 1rem 2rem;
`
