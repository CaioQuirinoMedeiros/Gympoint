/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PlansActions from '~/store/modules/plans/actions'
import PlanForm from '../PlanForm'

import Loading from '~/components/Loading'

import {
  Container,
  HeaderContainer,
  Title,
  HeaderActions,
  GoBack,
  Save,
} from './styles'

function AddPlan({ history }) {
  const creating = useSelector(({ students }) => students.creating)

  const dispatch = useDispatch()

  function goBack() {
    history.goBack()
  }

  function handleSubmit(data, { resetForm }) {
    console.log(data)
    // dispatch(PlansActions.createRequest(data))
    // resetForm()
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>Cadastro de plano</Title>
        <HeaderActions>
          {creating && <Loading size={30} />}
          <GoBack onClick={goBack}>Voltar</GoBack>
          <Save
            type='submit'
            form='create-plan-form'
            disabled={creating}
          >
            Salvar
          </Save>
        </HeaderActions>
      </HeaderContainer>
      <PlanForm onSubmit={handleSubmit} id='create-plan-form' />
    </Container>
  )
}

export default AddPlan
