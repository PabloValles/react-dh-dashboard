import React from 'react'
import TableMovieRow from './TableMovieRow'

const TableMoviesDb = () => {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th>Título</th>
          <th>Duración</th>
          <th>Rating</th>
          <th>Género</th>
          <th>Premios</th>
        </tr>
      </thead>
      <tbody>
        <TableMovieRow 
          name="Billy Elliot"
          duration={123}
          rating={5}
          genre={["Drama", "Comedia"]}
          awards={2}
        />
        <TableMovieRow 
          name="Alicia en el país de las maravillas"
          duration={142}
          rating={4.8}
          genre={["Drama", "Acción", "Comedia"]}
          awards={3}
        />

        <TableMovieRow />

      </tbody>
      <tfoot>
        <tr>
          <th>Título</th>
          <th>Duración</th>
          <th>Rating</th>
          <th>Género</th>
          <th>Premios</th>
        </tr>
      </tfoot>
    </table>
  )
}

export default TableMoviesDb