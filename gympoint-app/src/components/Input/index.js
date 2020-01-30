import styled from 'styled-components'

export default styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.dimDark
}))`
  border-radius: 4;
  height: 46;
  padding: 10px;
  font-size: 17;
  color: ${({ theme }) => theme.ink};
  border-width: 1;
  border-color: ${({ theme }) => theme.dimDark};
`
