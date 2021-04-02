import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from "../MovieCard";

const Watched = ({ watched }) => {
  return (
    <section className="movies">
      <div className="container">
        <div className="movies__header">
          <h2 className="movies__header__title">Watched Movies</h2>
          {watched.length > 0 && (
            <span className="movies__header__counter">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
            </span>
            )
          }
        </div>

        {watched.length > 0 ? (
          <div className="movies__grid">
           {watched.map((movie) => (
              <MovieCard movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <p className="movies__no-movie">No movies in this list! <br />Add some...</p>
        )}
      </div>
    </section>
  );
};

Watched.propTypes = {
  watched: PropTypes.array.isRequired
};

// == Container
const mapStateToProps = (state) => ({
  watched: state.lists.watched,
});

const mapDispatchToProps = (dispatch) => ({

});

const container = connect(mapStateToProps, mapDispatchToProps)(Watched);

export default container;
