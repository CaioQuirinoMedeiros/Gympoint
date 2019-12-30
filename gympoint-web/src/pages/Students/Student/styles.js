import styled, { css } from 'styled-components'

import BasicButtonComponent from '~/components/Buttons/BasicButton'

export const Card = styled.div`
  display: grid;
  grid-template-columns: 2fr 2.5fr 0.5fr 1fr;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.dim};
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;

  &:last-of-type {
    border-bottom-width: 0;
  }

  ${({ header, theme }) =>
    header &&
    css`
      span {
        font-weight: bold;
        color: ${theme.inkDark};
      }
    `}
`

export const StudentInfo = styled.span`
  font-size: 1.6rem;
  margin-right: 0.5rem;
  overflow: hidden;

  &:nth-of-type(3) {
    text-align: center;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ActionButton = styled(BasicButtonComponent)`
  margin-left: 2rem;
`
