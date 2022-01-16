import { css } from '@emotion/react'
import SearchBox from './SearchBox'

export type SearchBarProps = {}

function SearchBar({}: SearchBarProps) {
  return <div css={wrapper}>
    <div css={searchContainerStyle}>
      <div className={'search-bar'}>
        <SearchBox /></div>
    </div>
  </div>
}

const wrapper = css`
  display: flex;
  flex-grow: 2;
  flex-shrink: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`
const searchContainerStyle = css`
  flex-basis: 40rem;
  position: relative;
  margin-left: 2rem;
  margin-right: 2rem;

  .search-bar {
    max-width: 40rem;
  }
`

export default SearchBar
