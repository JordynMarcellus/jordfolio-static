import React, { memo } from "react"

const Button = memo(function ButtonComponent(props) {
  return <button>{props.children}</button>
})

export default Button
