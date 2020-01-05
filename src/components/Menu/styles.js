import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuWrapper = styled.aside`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-area: menu;
  position: fixed;
  right: 0;
  width: 3rem;
`

export const MenuLink = styled(Link)`
  display: block;
`

export const MenuItem = styled.span`
  align-items: center;
  color: var(--button);
  cursor: pointer;
  display: flex;
  height: 3rem;
  justify-content: center;
  transition: color 0.3s;
  width: 3rem;

  &:hover {
    color: var(--accent);
  }
`
