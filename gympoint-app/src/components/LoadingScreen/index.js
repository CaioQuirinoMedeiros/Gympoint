import React from 'react'
import styled from 'styled-components'

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.primary,
  size: 70 || 'large'
}))`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export default () => <Loading />
