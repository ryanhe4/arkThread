import { css } from '@emotion/react'

export type SubTitleProps = {
}

function SubTitle({}: SubTitleProps) {
  const subtile = 'MENU'
  return <div css={wrapper}>
    <div css={subTitleStyle}>
      <div className="base">
        <p>{subtile}</p>
      </div>
    </div>
  </div>
}

const wrapper = css`
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: row;
`
const subTitleStyle = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;

  .base {
    display: flex;
    align-self: center;
    align-items: center;
    white-space: nowrap;
    height: 100%;
  }
  
  p {
    text-align: center;
    font-weight: 600;
    line-height: 1.2;
    font-size: 1.4rem;
  }
`

export default SubTitle
