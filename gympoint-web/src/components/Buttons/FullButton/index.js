import React from 'react'
import PropTypes from 'prop-types'

import { Button, Icon } from './styles'

function FullButton({ children, loading, icon, ...rest }) {
  return (
    <Button {...rest}>
      {icon && <Icon icon={icon} />}
      {loading ? 'Carregando...' : children}
    </Button>
  )
}

FullButton.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool
}

export default FullButton
