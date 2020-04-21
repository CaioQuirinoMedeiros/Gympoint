import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import loginSchema from '~/utils/validations/login'
import AuthActions from '~/store/modules/auth/actions'

import {
  Container,
  LoginForm,
  Title,
  Field,
  Button,
  TesteToast
} from './styles'

function Login() {
  const loading = useSelector(({ auth }) => auth.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log("Tela de login: ", {REACT_APP_ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT})
    if (process.env.REACT_APP_ENVIRONMENT === 'demo') {
      toast(
        () => (
          <TesteToast>
            <p>AMBIENTE DE TESTE</p>
            <span>
              <strong>E-mail:</strong> admin@gympoint.com
            </span>
            <span>
              <strong>Senha:</strong> 123456
            </span>

            <a
              href='https://github.com/CaioQuirinoMedeiros/Gympoint'
              target='_blank'
              rel='noreferrer noopener'
            >
              Veja no GitHub{' '}
              <FontAwesomeIcon icon='chevron-right' style={{ fontSize: 14 }} />
            </a>
          </TesteToast>
        ),
        { autoClose: false }
      )
    }
  }, [])

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
