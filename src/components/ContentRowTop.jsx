import React from "react";
import ContentRowMovies from "./ContentRowMovies";
import LastMovieInDb from "./LastMovieInDb";
import TableMoviesDb from "./TableMoviesDb";

const ContentRowTop = () => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <ContentRowMovies titulo="Movies in Data Base" cifra={21} borderColor="border-left-primary" icono="film" />
        </div>
        <div className="col-md-4 mb-4">
          <ContentRowMovies titulo="Total awards" cifra={79} borderColor="border-left-success" icono="award" />
        </div>
        <div className="col-md-4 mb-4">
          <ContentRowMovies titulo="Actors quantity" cifra={"49"} borderColor="border-left-warning" icono="user" />
        </div>
      </div>


      <LastMovieInDb />

      <div className="row">
        <div className="col-12">
          <div className="card shadow h-100">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                Películas
              </h5>
            </div>
            <div className="card-body">              
              <TableMoviesDb />

            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ContentRowTop;
