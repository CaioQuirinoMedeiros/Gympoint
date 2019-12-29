import React from 'react';
import { useDispatch } from 'react-redux'

import AuthActions from '~/store/modules/auth/actions'

// import { Container } from './styles';

export default function Header() {
  const dispatch = useDispatch()

  function handleLogout() {
    dispatch(AuthActions.signOut())
  }

  return (
    <button onClick={handleLogout}>LOGOUT</button>
  );
}
