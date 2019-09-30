import React from 'react'
import PropTypes from 'prop-types'
import { PriceTag } from 'styled-icons/icomoon/PriceTag'
import { Clock2 as Clock } from 'styled-icons/icomoon/Clock2'

import * as S from './styles'

const PostItem = ({
  slug,
  category,
  background,
  title,
  description,
  date,
  timeToRead,
}) => (
  <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
      <S.PostItemInfo>
        <S.PostItemTag>
          <PriceTag size={20} />
          {category}
        </S.PostItemTag>
        <S.PostItemTitle background={background}>{title}</S.PostItemTitle>
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
  background: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
}

export default PostItem
