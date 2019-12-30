import styled from 'styled-components'

export const Button = styled.button`
  color: ${({ theme, negative }) =>
    negative ? theme.negative : theme.positive};
  font-size: 1.5rem;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme, negative }) =>
      negative ? theme.negativeLight : theme.positiveLight};
    text-shadow: 0.1px 0.1px #888;
  }
`
