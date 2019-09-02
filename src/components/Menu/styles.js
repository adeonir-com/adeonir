import styled from "styled-components"
import { Link } from "gatsby"

export const MenuWrapper = styled.nav`
  flex: 1;
`

export const MenuList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
  list-style: none;
`

export const MenuItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: #1c7ed6;
  }
`

export const MenuLink = styled(Link)`
  color: #f8f9fa;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #1c7ed6;
  }
`
