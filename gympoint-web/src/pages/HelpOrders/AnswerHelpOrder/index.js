import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import HelpOrdersActions from '~/store/modules/helpOrders/actions'

import Modal from '~/components/Modal'

import { Container, Button } from './styles'

function AnswerHelpOrder ({ id, close }) {
  const helpOrder = useSelector(({ helpOrders }) =>
    helpOrders.data.find(helpOrder => helpOrder.id === id)
  )

  const [answer, setAnswer] = useState('')

  const dispatch = useDispatch()

  console.log(helpOrder)

  function handleAnswerSubmit () {
    dispatch(HelpOrdersActions.answerRequest(id, { answer }))
  }

  return (
    <Modal visible={!!id} close={close}>
      <Container>
        <label>Pergunta do aluno</label>
        <p>{helpOrder?.question}</p>
        <label>Resposta</label>
        <textarea
          rows={5}
          minLength={5}
          maxLength={300}
          onChange={e => setAnswer(e.target.value)}
        />
        <Button onClick={handleAnswerSubmit}>Responder aluno</Button>
      </Container>
    </Modal>
  )
}

export default AnswerHelpOrder
