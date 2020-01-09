import React, { useState } from 'react'

import { Input, Wrapper, Unit } from './styles'

function TextInput({ className, unit, ...props }) {
  const unitRef = React.useRef(null)
  const [padding, setPadding] = useState(null)

  React.useEffect(() => {
    if (unitRef.current) {
      setPadding(unitRef.current.offsetWidth)
    } else {
      setPadding(null)
    }
  }, [unitRef])

  return (
    <Wrapper className={className} unit={unit} padding={padding}>
      <Input {...props} />
      {unit && <Unit ref={unitRef}>{unit}</Unit>}
    </Wrapper>
  )
}

export default TextInput
