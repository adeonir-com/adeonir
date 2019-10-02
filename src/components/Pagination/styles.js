import styled from 'styled-components'
import { Link } from 'gatsby'

import colors from '~/styles/colors'

export const PaginationWrapper = styled.section`
  align-items: center;
  color: ${colors.gray};
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
  text-transform: uppercase;
  width: 100%;
`

export const PaginationCurrent = styled.span`
  display: flex;
  justify-content: center;
  width: 33%;
`

export const PaginationFirstPage = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 33%;
`

export const PaginationLastPage = styled.span`
  display: flex;
  justify-content: flex-end;
  width: 33%;
`

export const PaginationButton = styled(Link)`
  align-items: center;
  color: ${colors.darker};
  display: flex;
  font-size: 0.8rem;
  justify-content: ${props => (props.position ? 'flex-end' : 'flex-start')};
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
  width: 33%;

  &:hover {
    color: ${colors.accent};
  }
`
