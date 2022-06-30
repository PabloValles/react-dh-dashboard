import React from 'react'
import PropTypes from 'prop-types'

const TableMovieRow = ({name, duration, rating, genre, awards}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{duration}</td>
      <td>{rating}</td>
      <td>
        <ul>
          {genre.map((genre, i) => <li key={i}>{genre}</li>)}
        </ul>
      </td>
      <td>{awards}</td>
    </tr>
  )
}

TableMovieRow.propTypes = {
  name: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  awards: PropTypes.number.isRequired,
}

TableMovieRow.defaultProps = {
  name: 'Nombre de la película',
  duration: 0,
  rating: 0,
  genre: ['Sin géneros'],
  awards: 0
}

export default TableMovieRow