import React from 'react';
import PropTypes from 'prop-types';

const ContentRowMovies = ({ titulo, cifra, borderColor, icono }) => {
  return (
    <div className={`card ${borderColor} shadow h-100 py-2`}>
      <div className='card-body'>
        <div className='row no-gutters align-items-center'>
          <div className='col mr-2'>
            <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
              {titulo}
            </div>
            <div className='h5 mb-0 font-weight-bold text-gray-800'>
              {cifra}{' '}
            </div>
          </div>
          <div className='col-auto'>
            <i className={`fas fa-${icono} fa-2x text-gray-300`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

ContentRowMovies.propTypes = {
  titulo: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  cifra: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icono: PropTypes.string.isRequired,
};

ContentRowMovies.defaultProps = {
  titulo: 'Información',
  borderColor: 'border-left-primary',
  icono: 'info',
};

export default ContentRowMovies;
