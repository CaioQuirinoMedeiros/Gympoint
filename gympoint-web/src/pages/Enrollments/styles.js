import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import FullButtonComponent from '~/components/Buttons/FullButton'

export const AddButton = styled(FullButtonComponent).attrs({
  icon: 'plus'
})``

export const Check = styled(FontAwesomeIcon).attrs(({ theme }) => ({
  icon: 'check',
  color: theme.white
}))`
  border-radius: 50%;
  background: ${({ theme }) => theme.dimDark};
  padding: 3px;

  &.active {
    background: ${({ theme }) => theme.positive};
  }
`
