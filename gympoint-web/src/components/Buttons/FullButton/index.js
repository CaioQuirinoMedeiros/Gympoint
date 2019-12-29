import React from 'react'

import { Button } from './styles'

function FullButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>
}

export default FullButton
