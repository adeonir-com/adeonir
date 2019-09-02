import styled from "styled-components"
import Img from "gatsby-image"

export const SidebarWrapper = styled.aside`
  align-items: center;
  background: #282a36;
  border-right: 1px solid #44475a;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 2rem;
  position: fixed;
  text-align: center;
  width: 20rem;
`

export const SidebarImage = styled(Img)`
  height: 11rem;
  width: 20rem;
`
