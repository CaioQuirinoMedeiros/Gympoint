import styled from 'styled-components'

export const Table = styled.table`
  flex: 1;
  border-collapse: collapse;

  tr {
    border-width: 0;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.dimLight};
    padding: 10rem;

    &:last-child {
      border: 0;
    }
  }

  th {
    text-align: left;
    font-size: 1.6rem;
    padding-bottom: 1.5rem;
    color: ${({ theme }) => theme.inkDark};

    &:nth-of-type(3) {
      text-align: center;
    }
  }

  td {
    font-size: 1.6rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    &:nth-of-type(3) {
      text-align: center;
    }
  }
`
