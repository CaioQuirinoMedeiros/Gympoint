import React from 'react'

import { Container, Error, Button } from './styles'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Error>
          <h1>Algo deu errado...</h1>
          <Button onClick={() => this.setState({ hasError: false })}>
            Recarregar componente
          </Button>
          <Button onClick={() => document.location.reload()}>
            Recarregar página
          </Button>
        </Error>
      )
    }

    return (
      <Container className={this.props.className}>
        {this.props.children}
      </Container>
    )
  }
}

export default ErrorBoundary
