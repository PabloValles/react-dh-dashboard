import React from "react";
import PropTypes from "prop-types";

const GenresInDb = ({ name, bg }) => {
  return (
    <div className={`card bg-${bg} text-white shadow`}>
      <div className="card-body">{name}</div>
    </div>
  );
};

GenresInDb.propTypes = {
  name: PropTypes.string.isRequired,
};

GenresInDb.defaultProps = {
  name: "Sin género",
  bg: "dark",
};

export default GenresInDb;
