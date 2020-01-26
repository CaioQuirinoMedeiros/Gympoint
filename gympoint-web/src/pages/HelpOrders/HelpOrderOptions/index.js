import React, { useState } from 'react'

import AnswerHelpOrder from '../AnswerHelpOrder'

import { Wrapper, ActionButton } from './styles'

function HelpOrderOptions ({ id, ...rest }) {
  const [answerId, setAnswerId] = useState()

  return (
    <Wrapper {...rest}>
      <ActionButton onClick={() => setAnswerId(id)}>responder</ActionButton>
      <AnswerHelpOrder id={answerId} close={() => setAnswerId(null)} />
    </Wrapper>
  )
}

export default HelpOrderOptions
