import React from 'react'
import { useSelector } from 'react-redux'

import SelectField from '~/components/Inputs/SelectField'

function SelectPlan(props) {
  const plans = useSelector(({ plans }) =>
    plans.data.map(plan => ({
      ...plan,
      label: plan.title,
      value: plan.id
    }))
  )

  return (
    <SelectField
      name='plan_id'
      label='Plano'
      options={plans}
      isSearchable
      isClearable
      placeholder='Selecione o plano'
      noOptionsMessage={() => 'Nenhum plano encontrado...'}
      {...props}
    />
  )
}

export default SelectPlan
