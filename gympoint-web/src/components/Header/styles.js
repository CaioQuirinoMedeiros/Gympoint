import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import BasicButtonComponent from '~/components/Buttons/BasicButton'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem;
  background: ${({ theme }) => theme.white};
  border-width: 1px;
  border-style: solid;
  border-color: red;
  border-color: ${({ theme }) => theme.dim};
`

export const Left = styled.div`
  display: flex;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
`

export const Logo = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  padding-right: 2rem;
  border-right-width: 1.5px;
  border-right-style: solid;
  border-right-color: ${({ theme }) => theme.dim};
`

export const NavBar = styled.ul`
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
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

export const UserName = styled.span`
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
`

export const LogoutButton = styled(BasicButtonComponent).attrs({
  negative: true
})`
  text-align: right;
`
