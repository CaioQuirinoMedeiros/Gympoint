import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import EnrollmentsActions from '~/store/modules/enrollments/actions'

import ConfirmWrapper from '~/components/ConfirmWrapper'
import { Wrapper, ActionButton } from './styles'

function EnrollmentOptions({ name, id, ...rest }) {
  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(EnrollmentsActions.deleteRequest(id))
  }

  return (
    <Wrapper {...rest}>
      <Link to={`enrollments/${id}/edit`}>
        <ActionButton>editar</ActionButton>
      </Link>
      <ConfirmWrapper onClick={handleDelete}>
        <ActionButton negative>apagar</ActionButton>
      </ConfirmWrapper>
    </Wrapper>
  )
}

export default EnrollmentOptions
