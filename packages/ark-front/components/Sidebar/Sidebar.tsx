import { css } from '@emotion/react'
import palette from '@lib/palette'
import SearchButton from '@components/SearchButton'
import SidebarList from '@components/Sidebar/SidebarList'

export type SidebarProps = {}

function Sidebar({}: SidebarProps) {
  return <div css={sidebarStyle}>
    <div className={'logo'}>
      ArkThread
    </div>
    <div className={'side-search'}>
      <SearchButton />
    </div>
    <SidebarList />
  </div>
}

const sidebarStyle = css`
  .logo {
    height: 3.375rem;
    font-weight: bold;
    font-size: 1.5rem;
    color: ${palette.amber[900]};
    padding: 6px 22px 6px 16px;
    display: flex;
    align-items: center;
    background: #fff;
  }

  .side-search {
    height: 3.5rem;
    background: #fff;
    border-top: 1px solid #E5E5E5;
    position: relative;
    padding: 12px 8px;
  }
`

export default Sidebar
