import styled from 'styled-components'

export default styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.dimDark
}))`
  border-radius: 4;
  height: 46;
  padding: 10px;
  color: ${({ theme }) => theme.ink};
  border-width: 1;
  border-color: ${({ theme }) => theme.dimDark};
`
