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
      <S.PaginationButton disabled>Primeira Página</S.PaginationButton>
    )}

    <S.PaginationCurrentPage>
      {currentPage} de {numPages}
    </S.PaginationCurrentPage>

    {!isLast ? (
      <S.PaginationButton right to={nextPage}>
        Próxima Página
        <RightArrow size={24} />
      </S.PaginationButton>
    ) : (
      <S.PaginationButton right disabled>
        Última Página
      </S.PaginationButton>
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
