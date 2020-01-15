import styled from 'styled-components'
import ReactDatePicker from 'react-datepicker'

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

export const DatePicker = styled(ReactDatePicker)`
  height: 38px;
   width: 100%;
  /*border-width: 1px;
  border-color: ${({ theme }) => theme.dim};
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.4rem;
  border-radius: 5px;
  transition: all 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.inkLight};
  }

  &:hover {
    border-color: ${({ theme }) => theme.dimDark};
  }

  &:focus {
    border-color: ${({ theme }) => theme.ink};
  } */
`
