import React from 'react'

import { Card, Title, Timestamp } from './styles'

function CheckinCard ({ checkin, ...rest }) {
  return (
    <Card {...rest}>
      <Title>Check-in #{checkin.id}</Title>
      <Timestamp>{checkin.createdAt}</Timestamp>
    </Card>
  )
}

export default CheckinCard
