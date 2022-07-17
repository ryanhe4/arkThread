import { css } from '@emotion/react'

export type SearchButtonProps = {}

function SearchButton({}: SearchButtonProps) {
  return <div css={searchButtonStyle}>
    {/*TODO(TOOLTIP)*/}
    <button>
      <span>메뉴 검색</span>
    </button>
  </div>
}

const searchButtonStyle = css`
  button {
    height: 2rem;
    border-radius: 1rem;
    background: #f2f4f8;
    color: #65686c;
    width: 100%;
    font-weight: 400;
    text-align: left;
    padding: 6px 16px;

    &:hover {
      background: #ebebeb;
    }
  }
`

export default SearchButton
