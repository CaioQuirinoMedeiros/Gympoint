import React from 'react'
import { useSelector } from 'react-redux'

import Modal from '~/components/Modal'

import { Container, Button } from './styles'

function AnswerHelpOrder ({ id, close }) {
  const helpOrder = useSelector(({ helpOrders }) =>
    helpOrders.data.find(helpOrder => helpOrder.id === id)
  )

  console.log(helpOrder)

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
          onChange={e => console.log(e.target.value)}
        />
        <Button onClick={() => {}}>Responder aluno</Button>
      </Container>
    </Modal>
  )
}

export default AnswerHelpOrder
