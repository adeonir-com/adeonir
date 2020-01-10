import styled, { css } from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid var(--disabled);
  color: var(--disabled);
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  padding-top: 1rem;
  text-transform: uppercase;
`

export const PaginationButton = styled(AniLink)`
  align-items: center;
  color: var(--button);
  display: flex;
  justify-content: ${props => (props.right ? 'flex-end' : 'flex-start')};
  height: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;
  ${props =>
    props.disabled &&
    css`
      color: var(--disabled);
      pointer-events: none;
    `}

  &:hover {
    color: var(--accent);
  }
`

export const PaginationCurrentPage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
`
