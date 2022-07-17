import { css } from '@emotion/react'
import palette from '@lib/palette'

export type SidebarItemProps = {
  text: string
  to: string
  active: boolean
}

function SidebarItem({ text, to, active }: SidebarItemProps) {
  return <li css={itemStyle} className={active ? 'active' : ''}>
    <span>{text}</span>
  </li>
}

const itemStyle = css`
  min-height: 1rem;
  font-size: 14px;
  line-height: 33px;
  height: 35px;
  position: relative;
  cursor: pointer;
  border-radius: 0.25rem;
  background: #fff;

  &:hover {
    background: #F2F4F8;
  }

  &.active {
    background: ${palette.amber[50]};
    color: ${palette.amber[900]};
    font-weight: 700;
  }


  span {
    margin: 0 5px 0 24px;
  }
`

export default SidebarItem
