import React from 'react'
import PropTypes from 'prop-types'
import { LeftArrowAlt as LeftArrow } from 'styled-icons/boxicons-regular/LeftArrowAlt'
import { RightArrowAlt as RightArrow } from 'styled-icons/boxicons-regular/RightArrowAlt'

import * as S from './styles'

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirst ? (
      <S.PaginationButton to={prevPage}>
        <LeftArrow size={24} />
        Página Anterior
      </S.PaginationButton>
    ) : (
      <S.PaginationFirstPage>Primeira Página</S.PaginationFirstPage>
    )}

    <S.PaginationCurrent>
      {currentPage} de {numPages}
    </S.PaginationCurrent>

    {!isLast ? (
      <S.PaginationButton position to={nextPage}>
        Próxima Página
        <RightArrow size={24} />
      </S.PaginationButton>
    ) : (
      <S.PaginationLastPage position>Última página</S.PaginationLastPage>
    )}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

export default Pagination
