import React from 'react'
import PropTypes from 'prop-types'

import { Button, Icon } from './styles'

function FullButton({ children, loading, disabled, icon, iconProps, ...rest }) {
  return (
    <Button disabled={loading || disabled} {...rest}>
      {icon && <Icon icon={icon} {...iconProps} />}
      {loading ? 'Carregando...' : children}
    </Button>
  )
}

FullButton.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool
}

export default FullButton
