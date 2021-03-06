import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Button = styled.button`
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding-left: 2rem;
  padding-right: 2rem;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  transition: all 0.2s;
  font-weight: 500;

  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.5;
          &:hover {
            cursor: not-allowed;
          }
        `
      : css`
          &:hover {
            transform: translateY(-1px);
            box-shadow: 0 2px 10px -5px #666;
            background: ${({ theme }) => theme.primaryLight};
          }
        `}
`

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`
