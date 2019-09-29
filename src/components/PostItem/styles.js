import styled from 'styled-components'
import { Link } from 'gatsby'

import colors from '~/styles/colors'

export const PostItemLink = styled(Link)`
  color: ${colors.dark};
  display: flex;
  text-decoration: none;

  &:hover {
    color: ${colors.accent};
  }
`

export const PostItemWrapper = styled.section`
  border-radius: 0.5rem;
  display: flex;
  padding: 2rem;
  margin-bottom: 2rem;
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
  font-size: 2.25rem;
  font-weight: bold;
  color: ${colors.dark};
  margin: 0.5rem 0 1rem;
  position: relative;

  &::before {
    display: block;
    width: 7rem;
    height: 1.8rem;
    background: ${props =>
      props.background ? props.background : colors.accent};
    content: '';
    position: absolute;
    left: -8rem;
    top: 0.25rem;
  }
`

export const PostItemText = styled.p`
  color: ${colors.dark};
  line-height: 1.3;
`

export const PostItemTag = styled.div`
  color: ${colors.gray};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  font-weight: bold;
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
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 2rem;

  svg {
    margin-right: 0.5rem;
  }
`
