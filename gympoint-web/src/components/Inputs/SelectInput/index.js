import React, { useRef, useEffect } from 'react'
import Select from 'react-select'
import { useField } from '@rocketseat/unform'

import { Wrapper, Label, selectStyles } from './styles'
import theme from '~/styles/theme'

export default function ReactSelect({
  name,
  label,
  options,
  multiple,
  className,
  ...rest
}) {
  const ref = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)

  function parseSelectValue(selectRef) {
    const selectValue = selectRef.state.value
    if (!multiple) {
      return selectValue ? selectValue.id : ''
    }

    return selectValue ? selectValue.map(option => option.id) : []
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.select.clearValue()
      }
    })
  }, [ref.current, fieldName]) // eslint-disable-line

  function getDefaultValue() {
    if (!defaultValue) return null

    if (!multiple) {
      return options.find(option => option.id === defaultValue)
    }

    return options.filter(option => defaultValue.includes(option.id))
  }

  return (
    <Wrapper className={className}>
      {label && <Label htmlFor={fieldName}>{label}</Label>}

      <Select
        styles={selectStyles}
        name={fieldName}
        aria-label={fieldName}
        options={options}
        isMulti={multiple}
        defaultValue={getDefaultValue()}
        ref={ref}
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
