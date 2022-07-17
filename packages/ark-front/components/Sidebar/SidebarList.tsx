import { css } from '@emotion/react'
import SidebarItem from '@components/Sidebar/SidebarItem'

export type SidebarListProps = {}

function SidebarList({}: SidebarListProps) {
  return <div css={sidebarListStyle}>
    <ul css={innerListStyle}>
      <SidebarItem text={'공지사항'} to={''} active />
      <SidebarItem text={'디스트로이어'} to={''} />
      <SidebarItem text={'호크아이'} to={''} />
    </ul>
  </div>
}

const sidebarListStyle = css`
  position: absolute;
  top: 111px;
  bottom: 0;
  left: 0;
  right: 0;

  background: #fff;
  border-top: 1px solid #E5E5E5;
`
const innerListStyle = css`
  padding: 0.5rem 0.25rem;
`

export default SidebarList
