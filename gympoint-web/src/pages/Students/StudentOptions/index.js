import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation, Link } from 'react-router-dom'

import StudentActions from '~/store/modules/students/actions'

import ConfirmWrapper from '~/components/ConfirmWrapper'
import { Wrapper, ActionButton } from './styles'

function StudentOptions({ name, id, ...rest }) {
  console.log(rest)
  const history = useHistory()
  const location = useLocation()

  console.log('history: ', history)
  console.log('location: ', location)
  const dispatch = useDispatch()

  function handleDelete() {
    dispatch(StudentActions.deleteRequest(id))
  }

  return (
    <Wrapper {...rest}>
      <Link to={`students/${id}/edit`}>
        <ActionButton>editar</ActionButton>
      </Link>
      <ConfirmWrapper onClick={handleDelete}>
        <ActionButton negative>apagar</ActionButton>
      </ConfirmWrapper>
    </Wrapper>
  )
}

// export default withRouter(StudentOptions)
export default StudentOptions
