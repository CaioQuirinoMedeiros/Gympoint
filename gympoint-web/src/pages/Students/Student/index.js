import React from 'react'

import { Card, StudentInfo, Actions, ActionButton } from './styles'

function Student({ student, ...rest }) {
  function handleEdit() {}

  function handleDelete() {}

  return (
    <Card {...rest} header={!student.id}>
      <StudentInfo>{student.name}</StudentInfo>
      <StudentInfo>{student.email}</StudentInfo>
      <StudentInfo>{student.age}</StudentInfo>
      <Actions>
        {student.id && (
          <>
            <ActionButton onClick={handleEdit}>editar</ActionButton>
            <ActionButton onClick={handleDelete} negative>
              apagar
            </ActionButton>
          </>
        )}
      </Actions>
    </Card>
  )
}

export default Student
