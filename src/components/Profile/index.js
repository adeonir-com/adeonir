import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import getThemeColor from '~/utils/get_theme_color'

import Avatar from '../Avatar'

import * as S from './styles'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          position
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to='/'
        cover
        direction='left'
        bg={getThemeColor()}
        duration={0.5}
      >
        <Avatar />
        <S.ProfileTitle>{title}</S.ProfileTitle>
      </S.ProfileLink>
      <S.ProfilePosition>{position}</S.ProfilePosition>
    </S.ProfileWrapper>
  )
}

export default Profile
