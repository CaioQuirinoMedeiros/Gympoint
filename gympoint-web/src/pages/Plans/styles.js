import styled from 'styled-components'

import FullButtonComponent from '~/components/Buttons/FullButton'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100rem;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

export const Title = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.inkDark};
  font-weight: bold;
`

export const HeaderActions = styled.div`
  display: flex;
`

export const AddStudentButton = styled(FullButtonComponent).attrs({
  icon: 'plus'
})``

export const Content = styled.div`
  flex: 1;
  display: flex;
  background: ${({ theme }) => theme.white};
  border-radius: 5px;
  padding: 2rem;
`
