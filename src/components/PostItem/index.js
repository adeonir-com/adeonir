import React from 'react'
import PropTypes from 'prop-types'
import { PriceTag } from 'styled-icons/icomoon/PriceTag'
import { Clock2 as Clock } from 'styled-icons/icomoon/Clock2'

import getThemeColor from '~/utils/get_theme_color'

import * as S from './styles'
import { PostItemInfo as NewPostItemInfo } from './styles'

const PostItem = ({ slug, category, background, title, description, date }) => (
  <S.PostItemLink
    to={slug}
    cover
    direction='right'
    bg={getThemeColor()}
    duration={0.5}
  >
    <S.PostItemWrapper>
      <S.NewPostItemInfo>
        <S.PostItemTag>
          <PriceTag size={20} />
          {category}
        </S.PostItemTag>
        <S.PostItemTitle background={background}>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
        <S.PostItemDate>
          <Clock size={20} />
          {date}
        </S.PostItemDate>
      </S.NewPostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string,
  background: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default PostItem
