import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  transition: all 0.2s;

  ${({ open }) =>
    open &&
    css`
      animation: vibrate-1 0.5s linear infinite both;
    `}
`
