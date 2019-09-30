import styled from 'styled-components'
import { Link } from 'gatsby'

import colors from '~/styles/colors'

export const PostItemLink = styled(Link)`
  color: ${colors.dark};
  display: flex;
  margin-bottom: 2rem;
  text-decoration: none;

  &:hover {
    color: ${colors.accent};
  }
`

export const PostItemWrapper = styled.section`
  border-radius: 0.5rem;
  display: flex;
  padding: 2rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.white};
  }
`

export const PostItemInfo = styled.div`
  padding-left: 8rem;
`

export const PostItemTitle = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  color: ${colors.dark};
  margin: 0.5rem 0 1rem;
  position: relative;

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

export const PostItemDescription = styled.p`
  color: ${colors.dark};
  font-size: 1.2rem;
  line-height: 1.5rem;
`

export const PostItemTag = styled.div`
  color: ${colors.gray};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  text-transform: uppercase;

  svg {
    margin-right: 0.5rem;
  }
`

export const PostItemDate = styled.time`
  color: ${colors.gray};
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 2rem;

  svg {
    margin-right: 0.5rem;
  }
`
