import styled from 'styled-components'
import { Input as UnformInput } from '@rocketseat/unform'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 1.6rem;
  padding-right: ${({ padding }) => (padding ? `${padding + 2}px` : 0)};

  label {
    text-transform: uppercase;
    margin-bottom: 3px;
    color: ${({ theme }) => theme.inkDark};
    font-size: 1.4rem;
    font-weight: bold;
  }

  span {
    position: absolute;
    bottom: 0;
    font-size: 1rem;
    height: 1.4rem;
  }
`

export const Input = styled(UnformInput)`
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

export const Unit = styled.small`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.inkLight};
  position: absolute;
  right: 0;
  top: 50%;
`
