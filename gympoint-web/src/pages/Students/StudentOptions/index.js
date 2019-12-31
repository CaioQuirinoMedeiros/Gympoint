import React from 'react'

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
        <ActionButton onClick={handleDelete} negative>
          apagar
        </ActionButton>
    </Wrapper>
  )
}

export default StudentOptions
