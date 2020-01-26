import styled from 'styled-components'

import FullButtonComponent from '~/components/Buttons/FullButton'

export const Container = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 4px;
  padding: 3rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  width: 70vw;
  min-width: 35rem;
  max-width: 60rem;

  label {
    text-transform: uppercase;
    margin-bottom: 3px;
    color: ${({ theme }) => theme.inkDark};
    font-size: 1.4rem;
    font-weight: bold;
  }

  p {
    text-align: justify;
    margin-bottom: 2rem;
  }

  textarea {
    margin-bottom: 2rem;
    resize: both;
    padding: 1rem;
  }
`

export const Button = styled(FullButtonComponent)``
