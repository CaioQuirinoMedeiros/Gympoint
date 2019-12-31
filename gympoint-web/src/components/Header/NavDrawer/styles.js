import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

import FullButtonComponent from '../../../components/Buttons/FullButton'

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 20rem;
`

export const Wrapper = styled.nav`
  background: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  opacity: 0;
  transform: scaleY(0);
  transform-origin: 100% 0%;
  transition: all 0.3s;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0px 3px 5px -2px #666;

  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      transform: scaleY(1);
    `}
`

export const NavItem = styled(NavLink)`
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.8px;
  color: ${({ theme }) => theme.inkLight};
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.5rem;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.ink};
  }

  &.active {
    color: ${({ theme }) => theme.inkDark};
  }
`

export const Button = styled(FullButtonComponent).attrs({
  iconProps: {
    style: {
      marginLeft: 10,
      marginRight: 0
    }
  }
})`
  height: 3rem;
  justify-content: space-between;
  flex-direction: row-reverse;
  z-index: 10;
  ${({ open }) => open && css`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    &:hover {
      transform: translateY(0);
      box-shadow: 0 0 0 0 #000;
    }
  `}
`
