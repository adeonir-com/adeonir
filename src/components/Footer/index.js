import React from 'react'

import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <S.FooterText>© {new Date().getFullYear()}, Built with</S.FooterText>
    <S.FooterLink
      href='https://www.gatsbyjs.org'
      target='_blank'
      rel='noopener noreferrer'
    >
      Gatsby
    </S.FooterLink>
    <S.FooterText>and</S.FooterText>
    <S.FooterLink
      href='https://www.netlifycms.org/'
      target='_blank'
      rel='noopener noreferrer'
    >
      Netlify CMS
    </S.FooterLink>
  </S.FooterContainer>
)

export default Footer
