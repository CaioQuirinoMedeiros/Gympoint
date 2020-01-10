import React from 'react'
import { useSelector } from 'react-redux'

import SelectInput from '~/components/Inputs/SelectInput'

function SelectPlan(props) {
  const plans = useSelector(({ plans }) => plans.data)
  return (
    <SelectInput
      name='plan_id'
      label='Plano'
      options={plans}
      isSearchable
      placeholder='Selecione o plano'
      noOptionsMessage={() => 'Nenhum plano encontrado...'}
      getOptionValue={option => option.id}
      getOptionLabel={option => option.title}
      {...props}
    />
  )
}

export default SelectPlan
