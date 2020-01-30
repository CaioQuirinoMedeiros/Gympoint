import React, { useMemo } from 'react'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'

import Header from '../../components/Header'

import { Container, Box, Wrapper, Title, Timestamp, Content } from './styles'

function Answer ({ navigation }) {
  const helpOrder = navigation.getParam('helpOrder')

  const createdAt = useMemo(() => {
    return formatDistanceToNow(parseISO(helpOrder.createdAt), {
      locale: pt,
      addSuffix: true
    })
  }, [helpOrder.createdAt])

  const answerAt = useMemo(() => {
    if (answerAt) {
      return formatDistanceToNow(parseISO(helpOrder.answer_at), {
        locale: pt,
        addSuffix: true
      })
    }
  }, [helpOrder.answerAt])

  return (
    <Container>
      <Header canGoBack />
      <Box>
        <Wrapper>
          <Title>Pergunta</Title>
          <Timestamp>{createdAt}</Timestamp>
        </Wrapper>
        <Content>{helpOrder.question}</Content>
        <Wrapper>
          <Title>{helpOrder.answer ? 'Resposta' : 'Sem resposta'}</Title>
          <Timestamp>{answerAt}</Timestamp>
        </Wrapper>
        <Content>{helpOrder.answer}</Content>
      </Box>
    </Container>
  )
}

export default Answer
