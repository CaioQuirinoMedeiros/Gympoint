import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HelpOrdersActions from '../../store/modules/helpOrders/actions'
import api from '../../services/api'

import Header from '../../components/Header'

import { Container, Content, Input, Button } from './styles'

function NewHelpOrder () {
  const [question, setQuestion] = useState('')

  const student = useSelector(({ auth }) => auth.student)
  const creating = useSelector(({ helpOrders }) => helpOrders.creating)

  const dispatch = useDispatch()

  async function handleCreateHelpOrder () {
    const { payload } = dispatch(HelpOrdersActions.createRequest({ question }))

    try {
      const { data } = await api.createHelpOrder(student?.id, payload.data)

      dispatch(HelpOrdersActions.createSuccess(data))
      setQuestion('')
    } catch ({ response }) {
      const error = response.data?.error || 'Erro ao buscar pedidos de auxílio'
      dispatch(HelpOrdersActions.createFailure(error))
    }
  }

  return (
    <Container>
      <Header canGoBack />
      <Content>
        <Input value={question} onChangeText={text => setQuestion(text)} />
        <Button
          onPress={handleCreateHelpOrder}
          disabled={creating || question.length < 5}
          loading={creating}
        >
          Enviar pedido
        </Button>
      </Content>
    </Container>
  )
}

export default NewHelpOrder
