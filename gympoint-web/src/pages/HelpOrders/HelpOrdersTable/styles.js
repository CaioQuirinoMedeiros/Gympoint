import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    padding-bottom: 1rem;
    color: ${({ theme }) => theme.inkDark};
    position: relative;
    transition: all 0.2s;
    text-transform: uppercase;

    &[title='Toggle SortBy']:hover {
      color: ${({ theme }) => theme.ink};
    }

  }

  td {
    font-size: 1.6rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`

export const Icon = styled(FontAwesomeIcon)`
  margin-left: 1rem;
  opacity: ${({ icon }) => (icon === 'sort' ? 0.4 : 1)};
  transition: all 0.2s;
`
