import styled from 'styled-components'

import ErrorBoundary from '~/components/ErrorBoundary'
import FullButtonComponent from '~/components/Buttons/FullButton'

export const Container = styled(ErrorBoundary)`
  flex: 1;
  display: flex;
  flex-direction: column;
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
  align-items: center;
`

export const GoBack = styled(FullButtonComponent).attrs({
  icon: 'chevron-left'
})`
  margin-left: 2rem;
  background: ${({ theme }) => theme.dimDark};
  :hover {
    background: ${({ theme }) => theme.dimDark};
  }
`

export const SaveButton = styled(FullButtonComponent).attrs({
  icon: 'check'
})`
  margin-left: 1rem;
`
