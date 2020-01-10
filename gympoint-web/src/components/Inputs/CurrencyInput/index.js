/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useField } from '@rocketseat/unform'

import { Wrapper, Label, Input } from './styles'

function CurrencyInput({ name, className, ...rest }) {
  const ref = React.useRef()
  const { fieldName, registerField, defaultValue, error } = useField(name)

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value'
    })
  }, [ref.current, fieldName]) // eslint-disable-line

  return (
    <Wrapper className={className}>
      {rest.label && <Label htmlFor={name}>{rest.label}</Label>}
      <Input
        name={fieldName}
        aria-label={fieldName}
        defaultValue={defaultValue}
        ref={ref}
        prefix='R$ '
        decimalSeparator=','
        thousandSeparator='.'
        {...rest}
      />
      {error && <span>{error}</span>}
    </Wrapper>
  )
}

export default CurrencyInput
