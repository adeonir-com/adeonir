import styled from 'styled-components'
import { rgba } from 'polished'
import Img from 'gatsby-image'

import colors from '~/styles/colors'

export const AvatarImage = styled(Img)`
  margin: 1rem;
  border-radius: 50%;
  border: 1px solid ${colors.black};
  box-shadow: 0 0 0 1rem ${rgba('#f8f9fa', 0.2)};
  transition: border 0.4s;
`
