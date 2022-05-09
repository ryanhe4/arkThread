import { mainStyle, verticalbarStyle } from '@layouts/Applayout/styles'
import React from 'react'

export type ApplayoutProps = {
  children: React.ReactNode;
}

function Applayout({ children }: ApplayoutProps) {
  return <>{children}</>
}

export type TopProps = {
  children: React.ReactNode;
}

function Top({ children }: TopProps) {
  return <header css={verticalbarStyle}>{children}</header>
}

export type MainProps = {
  children: React.ReactNode;
}

function Main({ children }: MainProps) {
  return <main css={mainStyle}>{children}</main>
}

Applayout.Top = Top
Applayout.Main = Main

export default Applayout
