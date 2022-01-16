import { css } from '@emotion/react'

export type UserBoxProps = {}

function UserBox({}: UserBoxProps) {
  return <div css={wrapper}>UserBox</div>
}

const wrapper = css`
  flex-grow: 1;
  flex-shrink: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export default UserBox
