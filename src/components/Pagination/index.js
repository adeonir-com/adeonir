import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
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
      <Link to={prevPage}>
        <LeftArrow size={24} />
        Página Anterior
      </Link>
    ) : (
      'Primeira Página'
    )}

    <p>
      {currentPage} de {numPages}
    </p>

    {!isLast ? (
      <Link to={nextPage}>
        Próxima Página
        <RightArrow size={24} />
      </Link>
    ) : (
      'Última página'
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
