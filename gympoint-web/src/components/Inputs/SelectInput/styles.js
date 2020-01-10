import styled from 'styled-components'

import theme from '~/styles/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  text-transform: uppercase;
  margin-bottom: 3px;
  color: ${({ theme }) => theme.inkDark};
  font-size: 1.4rem;
  font-weight: bold;
`

export const selectStyles = {
  container: (provided, state) => ({
    ...provided,
    fontSize: '1.4rem',
    color: theme.ink
  }),
  option: (provided, state) => ({
    ...provided
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: theme.ink
  }),
  valueContainer: (provided, state) => ({
    ...provided
  })
}
