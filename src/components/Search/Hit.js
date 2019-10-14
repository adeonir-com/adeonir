import React from 'react'
import PropTypes from 'prop-types'

import HitItem from '../HitItem'

const Hit = ({ hit }) => (
  <HitItem
    slug={hit.fields.slug}
    category={hit.category}
    background={hit.background}
    title={hit.title}
    description={hit.description}
  />
)

Hit.propTypes = {
  hit: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    category: PropTypes.string.isRequired,
    background: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })
}

export default Hit
