import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './styles'

function FullButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>
}

FullButton.propTypes = {
  children: PropTypes.node,
}

export default FullButton
