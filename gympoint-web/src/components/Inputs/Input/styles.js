import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 1.6rem;
  padding-right: ${({ padding }) => (padding ? `${padding + 2}px` : 0)};

  label {
    text-transform: uppercase;
    margin-bottom: 3px;
    color: ${({ theme }) => theme.inkDark};
    font-size: 1.4rem;
    font-weight: bold;
  }

  input {
    height: 38px;
  }

  span {
    position: absolute;
    bottom: 0;
    font-size: 1rem;
    height: 1.4rem;
    color: ${({ theme }) => theme.negative};
  }
`
