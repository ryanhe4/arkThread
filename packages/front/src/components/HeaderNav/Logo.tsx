import { css } from '@emotion/react'
import { NavLink } from 'react-router-dom'
import palette from '../../lib/palette'
import SubTitle from './SubTitle'
import Menu from './Menu'
import SearchBar from './SearchBar'
import UserBox from './UserBox'

export type LogoProps = {}

function Logo({}: LogoProps) {
  return <div css={logoStyle}>
    <h2 className='logo'>ArkThread</h2>
    <SubTitle />
    <Menu />
    <SearchBar />
    <UserBox />
  </div>
}

const logoStyle = css`
  flex-grow: 1;
  flex-shrink: 2;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: nowrap;

  .logo {
    align-self: center;
    padding: 0.5rem;
    display: inline-flex;
    text-align-all: center;
    font-size: 2rem;
    color: ${palette.deepOrange[600]};
    line-height: 1.7;
  }
`

export default Logo
