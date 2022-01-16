import { css } from '@emotion/react'
import Logo from './Logo'

export type HeaderNavProps = {}
function HeaderNav({}: HeaderNavProps) {
    return <div css={layout}>
        <Logo />
    </div>
};

const layout = css`
  height: 100%;
  display: flex;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15), 0 0px 2px rgba(0,0,0,0.1);
  align-items: stretch;
  flex-wrap: nowrap;
`

export default HeaderNav
