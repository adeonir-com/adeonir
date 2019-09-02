import styled from "styled-components"

export const SocialWrapper = styled.nav`
  margin: 2rem;
  width: 100%;
`

export const SocialList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialItem = styled.li``

export const SocialLink = styled.a`
  color: #f8f9fa;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #1c7ed6;
  }
`

export const IconWrapper = styled.div`
  fill: #f8f9fa;
  height: 1.5rem;
  width: 1.5rem;
`
