import React from 'react'

import icons from './icons'
import links from './content'

import * as S from './styles'

const Social = () => (
  <S.SocialWrapper>
    <S.SocialList>
      {links.map((link, index) => {
        const Icon = icons[link.label]

        return (
          <S.SocialItem key={index}>
            <S.SocialLink
              href={link.url}
              title={link.label}
              target='_blank'
              rel='noopener noreferrer'
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLink>
          </S.SocialItem>
        )
      })}
    </S.SocialList>
  </S.SocialWrapper>
)

export default Social
