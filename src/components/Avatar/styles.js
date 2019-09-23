import styled from 'styled-components'
import { rgba } from 'polished'
import Img from 'gatsby-image'

import colors from '~/styles/colors'

export const AvatarImage = styled(Img)`
  border-radius: 50%;
  border: 1px solid ${colors.black};
  box-shadow: 0 0 0 1rem ${rgba(colors.white, 0.2)};
  margin: 1rem;
  transition: border 0.4s;
`
