import React, { useMemo } from 'react'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'

import { Card, Title, Timestamp } from './styles'

function CheckinCard ({ checkin, ...rest }) {
  const createdAt = useMemo(() => {
    return formatDistanceToNow(parseISO(checkin.createdAt), {
      locale: pt,
      addSuffix: true
    })
  })

  return (
    <Card {...rest}>
      <Title>Check-in #{checkin.id}</Title>
      <Timestamp>{createdAt}</Timestamp>
    </Card>
  )
}

export default CheckinCard
