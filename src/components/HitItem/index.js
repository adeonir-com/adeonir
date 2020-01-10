import React from 'react'
import PropTypes from 'prop-types'
import { PriceTag } from 'styled-icons/icomoon/PriceTag'

import getThemeColor from '~/utils/get_theme_color'

import * as S from './styles'

const HitItem = ({ slug, category, background, title, description }) => (
  <S.HitItemLink
    to={slug}
    cover
    direction='right'
    bg={getThemeColor()}
    duration={0.5}
  >
    <S.HitItemContainer>
      <S.HitItemInfo>
        <S.HitItemTag>
          <PriceTag size={20} />
          {category}
        </S.HitItemTag>
        <S.HitItemTitle background={background}>{title}</S.HitItemTitle>
        <S.HitItemDescription>{description}</S.HitItemDescription>
      </S.HitItemInfo>
    </S.HitItemContainer>
  </S.HitItemLink>
)

HitItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  background: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default HitItem
