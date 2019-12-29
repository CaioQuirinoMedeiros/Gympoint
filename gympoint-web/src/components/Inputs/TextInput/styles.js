import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  border-width: 1px;
  border-color: ${({ theme }) => theme.dim};
  padding: 1rem;
  font-size: 1.4rem;
  border-radius: 5px;

  &::placeholder {
    color: ${({ theme }) => theme.inkLight};
  }
`

export const Label = styled.label`
  text-transform: uppercase;
  margin-bottom: 3px;
  color: ${({ theme }) => theme.inkDark};
  font-size: 1.4rem;
  font-weight: bold;
`
