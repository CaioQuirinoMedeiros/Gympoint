import React from 'react'
import styled from 'styled-components'

const Spinner = styled.div`
  display: inline-block;
  position: relative;
  /* width: 80px;
  height: 80px; */
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-width: ${({ size }) => size / 5}px;
    border-style: solid;
    border-color: ${({ theme }) => theme.primary};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.primary} transparent transparent
      transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

function Loading(props) {
  return (
    <Spinner {...props}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Spinner>
  )
}

Loading.defaultProps = {
  size: 64
}

export default Loading
