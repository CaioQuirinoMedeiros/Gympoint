import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = styled.button`
  height: 38px;
  border-radius: 5px;
  padding-left: 1rem;
  padding-right: 1rem;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 10px -5px #666;
    background: ${({ theme }) => theme.primaryLight};
  }
`

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`
