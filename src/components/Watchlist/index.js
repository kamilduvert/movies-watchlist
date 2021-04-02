import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from "../MovieCard";

const Watchlist = ({ watchlist }) => {
  return (
    <section className="movies">
      <div className="container">
        <div className="movies__header">
          <h2 className="movies__header__title">My Watchlist</h2>
          {watchlist.length > 0 && (
            <span className="movies__header__counter">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
            </span>
            )
          }
        </div>

        {watchlist.length > 0 ? (
          <div className="movies__grid">
           {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="movies__no-movie">No movies in your list! Add some!</h2>
        )}
      </div>
    </section>
  );
};

Watchlist.propTypes = {
  watchlist: PropTypes.array.isRequired
};

// == Container
const mapStateToProps = (state) => ({
  watchlist: state.lists.watchlist,
});

const mapDispatchToProps = (dispatch) => ({

});

const container = connect(mapStateToProps, mapDispatchToProps)(Watchlist);

export default container;
