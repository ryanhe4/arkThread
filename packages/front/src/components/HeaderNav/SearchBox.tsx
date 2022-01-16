import { css } from '@emotion/react'
import palette from '../../lib/palette'

export type SearchBoxProps = {}

function SearchBox({}: SearchBoxProps) {
  return <div css={wrapper}>
    <div className="search-box">
      <div className="inner">
        <input css={inputStyle} placeholder="검색" maxLength={150}/>
      </div>
      <button css={buttonStyle}>돋보기</button>
    </div>
  </div>
}

const wrapper = css`
  position: relative;
  z-index: 1;
  padding: 0.5rem;
  
  .search-box {
    display: flex;
    width: 100%;
    .inner {
      flex-grow: 1;
      margin-right: 1px;
      position: relative;
    }
  }
`
const buttonStyle = css`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  border-radius: 0;
  background: rgba(0,0,0,0.05);
  color: #0e0e10;
  border: none;
  height: 3.6rem;
  white-space: nowrap;
  user-select: none;
  border-top-right-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
`
const inputStyle = css`
  display: block;
  width: 100%;
  height: 3.6rem;
  appearance: none;
  background-clip: padding-box;
  line-height: 1.5;
  transition: border 100ms ease-in, background-color 100ms ease-in;
  border-style: solid;
  border-width: 2px;
  border-color: rgba(0,0,0,0.1);
  background-color: rgba(0,0,0,0.1);
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  border-radius: 0.6rem 0 0 0.6rem !important;
  
  &:focus, &:focus:hover {
    outline: none;
    background-color: #fff;
    border-color: ${palette.deepOrange['600']};
  }
`

export default SearchBox
