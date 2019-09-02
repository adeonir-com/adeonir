import styled from 'styled-components'
import { rgba } from 'polished'
import Img from 'gatsby-image'

export const AvatarImage = styled(Img)`
  margin: 1rem;
  border-radius: 50%;
  box-shadow: 0 0 0 0.4rem ${rgba('#f8f9fa', 0.2)},
    0 0 0 0.8rem ${rgba('#f8f9fa', 0.2)};
`
