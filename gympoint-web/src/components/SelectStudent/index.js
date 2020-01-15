import React from 'react'
import { useSelector } from 'react-redux'

import SelectField from '~/components/Inputs/SelectField'

function SelectStudent(props) {
  const students = useSelector(({ students }) =>
    students.data.map(student => ({
      ...student,
      label: student.name,
      value: student.id
    }))
  )

  return (
    <SelectField
      name='student_id'
      label='Aluno'
      options={students}
      isSearchable
      placeholder='Buscar aluno'
      noOptionsMessage={() => 'Nenhum aluno encontrado...'}
      {...props}
    />
  )
}

export default SelectStudent
