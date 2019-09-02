import styled from "styled-components"
import { rgba } from "polished"
import Img from "gatsby-image"

export const AvatarImage = styled(Img)`
  margin: 1rem;
  border-radius: 50%;
  box-shadow: 0 0 0 0.5rem ${rgba("#f8f9fa", 0.2)},
    0 0 0 1rem ${rgba("#f8f9fa", 0.2)};
`
