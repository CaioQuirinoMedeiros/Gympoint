import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import PlansActions from '~/store/modules/plans/actions'

import ConfirmWrapper from '~/components/ConfirmWrapper'
import { Wrapper, ActionButton } from './styles'

function PlanOptions({ name, id, ...rest }) {
  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(PlansActions.deleteRequest(id))
  }

  return (
    <Wrapper {...rest}>
      <Link to={`plans/${id}/edit`}>
        <ActionButton>editar</ActionButton>
      </Link>
      <ConfirmWrapper onClick={handleDelete}>
        <ActionButton negative>apagar</ActionButton>
      </ConfirmWrapper>
    </Wrapper>
  )
}

export default PlanOptions
