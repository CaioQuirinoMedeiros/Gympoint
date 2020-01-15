import React from 'react'
import Select from 'react-select'

import { Wrapper, selectStyles } from './styles'
import theme from '~/styles/theme'

export default function ReactSelect({
  name,
  label,
  error,
  className,
  ...rest
}) {
  return (
    <Wrapper className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <Select
        styles={selectStyles}
        theme={providedTheme => ({
          ...providedTheme,
          colors: {
            ...providedTheme.colors,
            primary: theme.primary,
            primary25: theme.dim,
            primary50: theme.dimDark
          }
        })}
        {...rest}
      />
      {error && <span>{error}</span>}
    </Wrapper>
  )
}
