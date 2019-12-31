import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AuthActions from '~/store/modules/auth/actions'

import {
  Container,
  Left,
  Logo,
  NavBar,
  NavDrawer,
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
        <NavBar />
        <NavDrawer />
      </Left>
      <Right>
        <UserName>{user.name}</UserName>
        <LogoutButton onClick={handleLogout}>Sair do sistema</LogoutButton>
      </Right>
    </Container>
  )
}

export default Header
