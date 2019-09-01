import styled from "styled-components"
import { Link } from "gatsby"

export const ProfileWrapper = styled.section`
  border-bottom: 1px solid #44475a;
  color: #f8f9fa;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
`

export const ProfileLink = styled(Link)`
  text-decoration: none;
  transition: color 0.3s;

  &:hover h1,
  &:hover h2 {
    color: #1c7ed6;
  }
`

export const ProfileAuthor = styled.h1`
  color: #f8f9fa;
  font-size: 1.75rem;
  margin: 1rem auto 0.75rem;
  transition: color 0.3s;
`

export const ProfilePosition = styled.h2`
  color: #a4a7bc;
  font-size: 1rem;
  font-weight: 300;
  transition: color 0.3s;
`
