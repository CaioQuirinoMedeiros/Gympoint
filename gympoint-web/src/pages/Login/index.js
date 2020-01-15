import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik } from 'formik'

import loginSchema from '~/utils/validations/login'
import AuthActions from '~/store/modules/auth/actions'

import { Container, LoginForm, Title, Field, Button } from './styles'

function Login() {
  const loading = useSelector(({ auth }) => auth.loading)

  const dispatch = useDispatch()

  function handleLogin({ email, password }) {
    dispatch(AuthActions.signInRequest(email, password))
  }

  function renderForm(formik) {
    return (
      <LoginForm>
        <Title>Gympoint</Title>
        <Field
          name='email'
          label='Seu e-mail'
          placeholder='exemplo@email.com'
        />
        <Field
          name='password'
          type='password'
          label='Sua senha'
          placeholder='********'
        />
        <Button type='submit' loading={loading} disabled={!formik.isValid}>
          Entrar no sistema
        </Button>
      </LoginForm>
    )
  }

  return (
    <Container>
      <Formik
        onSubmit={handleLogin}
        validationSchema={loginSchema}
        initialValues={{}}
      >
        {renderForm}
      </Formik>
    </Container>
  )
}

export default Login
