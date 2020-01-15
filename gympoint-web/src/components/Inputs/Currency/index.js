/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import CurrencyInput from 'react-currency-input'

import { Wrapper } from '~/components/Inputs/Input/styles'

function Currency({ label, name, error, className, ...rest }) {
  return (
    <Wrapper className={className}>
      {label && <label htmlFor={name}>{label}</label>}
      <CurrencyInput
        id={name}
        prefix='R$ '
        decimalSeparator=','
        thousandSeparator='.'
        {...rest}
      />
      {error && <span>{error}</span>}
    </Wrapper>
  )
}

export default Currency
