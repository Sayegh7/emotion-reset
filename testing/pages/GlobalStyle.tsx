import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'
const styles = css`
  ${emotionReset}
  body {
    background-color: #e8e8e8;
  }
`

export const GlobalStyle = () => <Global styles={styles} />
