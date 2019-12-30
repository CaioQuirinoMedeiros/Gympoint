import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AuthActions from '~/store/modules/auth/actions'

import {
  Container,
  Left,
  Logo,
  NavBar,
  NavItem,
  Right,
  UserName,
  LogoutButton
} from './styles'

function Header() {
  const user = useSelector(({ auth }) => auth.user)
  const dispatch = useDispatch()

  function handleLogout() {
    dispatch(AuthActions.signOut())
  }

  return (
    <Container>
      <Left>
        <Logo>Gympoint</Logo>
        <NavBar>
          <NavItem to='/app/students'>Alunos</NavItem>
          <NavItem to='/app/plans'>Planos</NavItem>
          <NavItem to='/app/enrollments'>Matrículas</NavItem>
          <NavItem to='/app/help-orders'>Pedidos de auxílio</NavItem>
        </NavBar>
      </Left>
      <Right>
        <UserName>{user.name}</UserName>
        <LogoutButton onClick={handleLogout}>Sair do sistema</LogoutButton>
      </Right>
    </Container>
  )
}

export default Header
