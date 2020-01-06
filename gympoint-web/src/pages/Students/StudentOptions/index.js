import React from 'react'

import ConfirmWrapper from '~/components/ConfirmWrapper'
import { Wrapper, ActionButton } from './styles'

function StudentOptions({ name, ...rest }) {
  function handleEdit() {
    alert('edit student ' + name)
  }

  function handleDelete() {
    alert('DELETING student ' + name)
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
