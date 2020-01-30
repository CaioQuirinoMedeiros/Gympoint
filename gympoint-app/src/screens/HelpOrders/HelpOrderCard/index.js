import React, { useMemo } from 'react'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'

import {
  Card,
  CardHeader,
  StatusWrapper,
  CheckIcon,
  Status,
  Timestamp,
  Preview
} from './styles'

function HelpOrderCard ({ helpOrder, ...rest }) {
  const answered = useMemo(() => {
    return !!helpOrder.answer_at
  })

  const createdAt = useMemo(() => {
    return formatDistanceToNow(parseISO(helpOrder.createdAt), {
      locale: pt,
      addSuffix: true
    })
  })

  return (
    <Card {...rest}>
      <CardHeader>
        <StatusWrapper>
          <CheckIcon answered={answered}/>
          <Status answered={answered}>
            {answered ? 'Respondido' : 'Sem resposta'}
          </Status>
        </StatusWrapper>
        <Timestamp>{createdAt}</Timestamp>
      </CardHeader>
      <Preview>{helpOrder.question}</Preview>
    </Card>
  )
}

export default HelpOrderCard
