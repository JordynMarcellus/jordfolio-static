import React from "react"
import { Global, css } from "@emotion/core"

const styles = css`
  body {
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
      Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 300;
    font-size: calc(1rem + ((1vw - 0.3rem) * 1.1111));
    margin: 0;
    padding: 0;
  }
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`

const GlobalStyles = () => <Global styles={styles} />

export default GlobalStyles
