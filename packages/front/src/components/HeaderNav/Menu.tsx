import { css } from '@emotion/react'
import IconSvg from '../IconSVG'
import { menu } from '../IconSVG/svg'

export type MenuProps = {}

function Menu({}: MenuProps) {
  return <div css={wrapper}>
    <div css={block}>
      <div css={flexblock}>
        <button>
          <div className="figure"><IconSvg name='menu2' /></div>
        </button>
      </div>
    </div>
  </div>
}

const wrapper = css`
  display: flex;
  height: 100%;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`
const block = css`
  display: inline-block;
  position: relative;
`
const flexblock = css`
  display: inline-flex;
  align-items: center;

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    height: 3rem;
    width: 3rem;
    border-radius: 0.4rem;
    background-color: transparent;
    color: #0e0e10;
    position: relative;
    vertical-align: middle;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 600;
    font-size: 1.3rem;
    border: none;
    
    &:hover {
      background-color: rgba(0,0,0,0.1);
    }
    
    .figure {
      width: 2rem;
      height: 2rem;
      display: inline-flex;
      align-items: center;
    }

    svg {
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export default Menu
