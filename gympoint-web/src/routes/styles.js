import styled from 'styled-components'

import ErrorBoundary from '~/components/ErrorBoundary'

export const Wrapper = styled(ErrorBoundary)`
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`
