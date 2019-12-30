import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Content = styled.main`
  flex: 1;
  background: ${({ theme }) => theme.dimLight};
  display: flex;
  justify-content: center;
  padding: 4rem;

`
