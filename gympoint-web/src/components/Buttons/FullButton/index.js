import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './styles'

function FullButton({ children, loading, ...rest }) {
  return <Button {...rest}>{loading ? 'Carregando...': children }</Button>
}

FullButton.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool
}

export default FullButton
