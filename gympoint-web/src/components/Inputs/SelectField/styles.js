import styled from 'styled-components'

import theme from '~/styles/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 1.6rem;

  > label {
    text-transform: uppercase;
    margin-bottom: 3px;
    color: ${({ theme }) => theme.inkDark};
    font-size: 1.4rem;
    font-weight: bold;
  }

  > span {
    position: absolute;
    bottom: 0;
    font-size: 1rem;
    height: 1.4rem;
    color: ${({ theme }) => theme.negative};
  }
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
