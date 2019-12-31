import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.ul`
  display: flex;
  align-items: center;
`

export const NavItem = styled(NavLink)`
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.8px;
  color: ${({ theme }) => theme.inkLight};
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.5rem;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.ink};
  }

  &.active {
    color: ${({ theme }) => theme.inkDark};
  }
`
