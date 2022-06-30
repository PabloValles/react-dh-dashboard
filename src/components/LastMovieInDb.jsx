import React from "react";
import GenresInDb from "./GenresInDb";
import mandalorian from "../assets/images/mandalorian.jpg";

const LastMovieInDb = () => {
  const imgStyle = {
    width: "40rem",
  };

  return (
    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Last movie in Data Base
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={imgStyle}
                src={mandalorian}
                alt=" Star Wars - Mandalorian "
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              consequatur explicabo officia inventore libero veritatis iure
              voluptate reiciendis a magnam, vitae, aperiam voluptatum non
              corporis quae dolorem culpa citationem ratione aperiam voluptatum
              non corporis ratione aperiam voluptatum quae dolorem culpa ratione
              aperiam voluptatum?
            </p>
            <a
              className="btn btn-danger"
              target="_blank"
              rel="nofollow"
              href="/"
            >
              View movie detail
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Genres in Data Base
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <GenresInDb name="Acción" bg="danger" />
              </div>
              <div className="col-lg-6 mb-4">
                <GenresInDb name="Animación" />
              </div>
              <div className="col-lg-6 mb-4">
                <GenresInDb name="Aventura" bg="success" />
              </div>
              <div className="col-lg-6 mb-4">
                <GenresInDb name="Ciencia Ficción" />
              </div>
              <div className="col-lg-6 mb-4">
                <GenresInDb name="Comedia" bg="info" />
              </div>
              <div className="col-lg-6 mb-4">
                <GenresInDb name="Documental" bg="primary" />
              </div>
              <div className="col-lg-6 mb-4">
                <GenresInDb name="Drama" />
              </div>
              <div className="col-lg-6 mb-4">
                <GenresInDb name="Fantasía" />
              </div>
              <div className="col-lg-6 mb-4">
                <GenresInDb name="Infantiles" />
              </div>
              <div className="col-lg-6 mb-4">
                <GenresInDb name="Musical" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastMovieInDb;
