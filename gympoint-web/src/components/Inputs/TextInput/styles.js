import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  height: 38px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.dim};
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.4rem;
  border-radius: 5px;
  transition: all 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.inkLight};
  }

  &:hover {
    border-color: ${({ theme }) => theme.dimDark};
  }

  &:focus {
    border-color: ${({ theme }) => theme.ink};
  }
`

export const Label = styled.label`
  text-transform: uppercase;
  margin-bottom: 3px;
  color: ${({ theme }) => theme.inkDark};
  font-size: 1.4rem;
  font-weight: bold;
`
