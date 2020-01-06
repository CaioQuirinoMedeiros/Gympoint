import React from 'react'
import { useDispatch } from 'react-redux'

import StudentActions from '~/store/modules/student/actions'

import ConfirmWrapper from '~/components/ConfirmWrapper'
import { Wrapper, ActionButton } from './styles'

function StudentOptions({ name, id, ...rest }) {
  const dispatch = useDispatch()

  function handleEdit() {
    alert('edit student ' + name)
  }

  function handleDelete() {
    dispatch(StudentActions.deleteRequest(id))
  }

  return (
    <Wrapper {...rest}>
      <ActionButton onClick={handleEdit}>editar</ActionButton>
      <ConfirmWrapper onClick={handleDelete}>
        <ActionButton negative>apagar</ActionButton>
      </ConfirmWrapper>
    </Wrapper>
  )
}

export default StudentOptions
