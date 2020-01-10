import React from 'react'
import { useSelector } from 'react-redux'

import SelectInput from '~/components/Inputs/SelectInput'

function SelectStudent(props) {
  const students = useSelector(({ students }) => students.data)
  return (
    <SelectInput
      name='student_id'
      label='Aluno'
      options={students}
      isSearchable
      placeholder='Buscar aluno'
      noOptionsMessage={() => 'Nenhum aluno encontrado...'}
      getOptionValue={option => option.id}
      getOptionLabel={option => option.name}
      {...props}
    />
  )
}

export default SelectStudent
