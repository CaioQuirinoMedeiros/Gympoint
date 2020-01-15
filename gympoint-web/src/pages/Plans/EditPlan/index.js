/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Redirect } from 'react-router-dom'

import PlansActions from '~/store/modules/plans/actions'
import PlanForm from '../PlanForm'

import Loading from '~/components/Loading'

import {
  Container,
  HeaderContainer,
  Title,
  HeaderActions,
  GoBack,
  SaveButton
} from './styles'

function EditPlan({ history }) {
  const { planId } = useParams()

  const editing = useSelector(({ plans }) => plans.editing)
  const plan = useSelector(({ plans }) =>
    plans.data.find(student => student.id === parseInt(planId))
  )

  const dispatch = useDispatch()

  function goBack() {
    history.goBack()
  }

  function transformDataToSend(data) {
    return {
      ...data,
      price: parseInt(data.price * 100)
    }
  }

  function transformReceivedData(data) {
    return {
      ...data,
      price: data.price ? data.price / 100 : null
    }
  }

  function handleSubmit(data) {
    const transformedData = transformDataToSend(data)
    dispatch(PlansActions.editRequest(planId, transformedData))
  }

  if (!plan) {
    return <Redirect to='plans' />
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>Edição de plano</Title>
        <HeaderActions>
          {editing && <Loading size={30} />}
          <GoBack onClick={goBack}>Voltar</GoBack>
          <SaveButton type='submit' form='edit-plan-form' disabled={editing}>
            Salvar
          </SaveButton>
        </HeaderActions>
      </HeaderContainer>
      <PlanForm
        initialValues={transformReceivedData(plan)}
        onSubmit={handleSubmit}
        id='edit-plan-form'
      />
    </Container>
  )
}

export default EditPlan
