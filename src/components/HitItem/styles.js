import styled from 'styled-components'
import { Link } from 'gatsby'

import colors from '~/styles/colors'

export const HitItemLink = styled(Link)`
  color: ${colors.dark};
  display: flex;
  margin-bottom: 1rem;
  text-decoration: none;

  &:hover {
    color: var(--accent);
  }
`

export const HitItemContainer = styled.section`
  border-radius: 0.5rem;
  display: flex;
  padding: 1rem 2rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--post);
  }
`

export const HitItemInfo = styled.div`
  padding-left: 8rem;
`

export const HitItemTitle = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  color: var(--title);
  margin: 0.5rem 0;
  position: relative;
  transition: color 0.2s ease;

  &::before {
    display: block;
    width: 7rem;
    height: 2.6rem;
    background: ${props =>
      props.background ? props.background : colors.accent};
    content: '';
    position: absolute;
    left: -8rem;
    top: 0.3rem;
  }
`

export const HitItemDescription = styled.p`
  color: var(--text);
  font-size: 1rem;
  line-height: 1.5rem;
  transition: color 0.2s ease;
`

export const HitItemTag = styled.div`
  color: var(--neutral);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  text-transform: uppercase;
  transition: color 0.2s ease;

  svg {
    margin-right: 0.5rem;
  }
`
