import styled from 'styled-components'
import { rgba } from 'polished'
import Img from 'gatsby-image'

export const AvatarImage = styled(Img)`
  margin: 1rem;
  border-radius: 50%;
  border: 3px solid #44475a;
  box-shadow: 0 0 0 0.8rem ${rgba('#f8f9fa', 0.2)};
  transition: border 0.4s;
`
