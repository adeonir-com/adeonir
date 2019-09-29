import React from 'react'
import { PriceTag } from 'styled-icons/icomoon/PriceTag'
import { Clock2 as Clock } from 'styled-icons/icomoon/Clock2'

import * as S from './styles'

const PostItem = () => (
  <S.PostItemLink to='/404'>
    <S.PostItemWrapper>
      <S.PostItemInfo>
        <S.PostItemTag>
          <PriceTag size={20} />
          JavaScript
        </S.PostItemTag>
        <S.PostItemTitle background='#E5E942'>
          Ipsum nostrud voluptate magna
        </S.PostItemTitle>
        <S.PostItemText>
          Proident qui anim dolore non culpa in mollit ipsum incididunt tempor
          aliqua dolor nulla pariatur magna do adipisicing ut consequat
        </S.PostItemText>
        <S.PostItemDate>
          <Clock size={20} />
          February 17, 2014 7:00 AM - 3 min reading
        </S.PostItemDate>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
