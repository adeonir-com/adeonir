import styled from 'styled-components'
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
  border-bottom: 1px solid #44475a;
  color: #f8f9fa;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  width: 100%;
`

export const ProfileLink = styled(Link)`
  text-decoration: none;
  transition: color 0.3s;

  &:hover h1 {
    color: #6b8cff;
  }

  &:hover div {
    border-color: #6b8cff;
  }
`

export const ProfileAuthor = styled.h1`
  color: #f8f9fa;
  font-size: 1.75rem;
  margin: 1rem auto 0.75rem;
  transition: color 0.5s;
`

export const ProfilePosition = styled.h2`
  color: #a4a7bc;
  font-size: 0.8rem;
  font-weight: 300;
`
