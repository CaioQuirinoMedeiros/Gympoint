import styled from 'styled-components'

export const Button = styled.button`
  color: ${({ theme, negative }) =>
    negative ? theme.negative : theme.secundary};
  font-size: 1.5rem;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme, negative }) =>
      negative ? theme.negativeLight : theme.secundaryLight};
    text-shadow: 0.1px 0.1px #888;
  }
`
