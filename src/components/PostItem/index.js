import React from 'react'
import PropTypes from 'prop-types'
import { PriceTag } from 'styled-icons/icomoon/PriceTag'
import { Clock2 as Clock } from 'styled-icons/icomoon/Clock2'

import getThemeColor from '~/utils/get_theme_color'

import * as S from './styles'

const PostItem = ({ slug, title, description, date, category, timeToRead }) => (
  <S.PostItemLink
    to={slug}
    cover
    direction='right'
    bg={getThemeColor()}
    duration={0.5}
  >
    <S.PostItemWrapper>
      <S.PostItemInfo>
        <S.PostItemTag>
          <PriceTag size={20} />
          {category}
        </S.PostItemTag>
        <S.PostItemTitle background={`var(--${category})`}>
          {title}
        </S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
        <S.PostItemDate>
          <Clock size={20} />
          {date} - {timeToRead} minutos de leitura
        </S.PostItemDate>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
}

export default PostItem
