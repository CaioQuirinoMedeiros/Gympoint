import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './styles'

function BasicButton({ children, ...rest }) {
   return <Button {...rest}>{children}</Button>
}

BasicButton.propTypes = {
  children: PropTypes.node,
}

export default BasicButton
