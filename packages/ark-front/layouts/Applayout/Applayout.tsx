import { mainStyle, sidebarStyle } from '@layouts/Applayout/styles'
import React from 'react'

export type ApplayoutProps = {
  children: React.ReactNode;
}

function Applayout({ children }: ApplayoutProps) {
  return <div>{children}</div>
}

export type SideProps = {
  children: React.ReactNode;
}

function Side({ children }: SideProps) {
  return <aside css={sidebarStyle}>{children}</aside>
}


export type MainProps = {
  children: React.ReactNode;
}

function Main({ children }: MainProps) {
  return <main css={mainStyle}>{children}</main>
}

Applayout.Main = Main
Applayout.Side = Side

export default Applayout
