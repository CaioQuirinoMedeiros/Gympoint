import styled from 'styled-components'

import BasicButtonComponent from '~/components/Buttons/BasicButton'
import NavBarComponent from './NavBar'
import NavDrawerComponent from './NavDrawer'

const mediaWidth = '45em'

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
  align-items: center;
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

export const NavBar = styled(NavBarComponent)`
  margin-left: 1rem;
  margin-right: 1rem;

  @media only screen and (max-width: ${mediaWidth}) {
    display: none;
  }
`

export const NavDrawer = styled(NavDrawerComponent)`
  margin-left: 2rem;
  margin-right: 2rem;
  display: none;

  @media only screen and (max-width: ${mediaWidth}) {
    display: flex;
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
