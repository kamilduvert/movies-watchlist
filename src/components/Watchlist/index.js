import React from "react";
import { connect } from 'react-redux';

const Watchlist = ({ watchlist }) => {
  return (
    <section className="watchlist">
      <div className="container">
        <div className="watchlist__header">
          <h1 className="watchlist__header__title">My Watchlist</h1>
          {watchlist >0 && (
            <span className="watchlist__header__counter">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
            </span>
            )
          }
        </div>

        {watchlist.length > 0 ? (
          <div className="watchlist__movies">
           
          </div>
        ) : (
          <h2 className="watchlist__no-movie">No movies in your list! Add some!</h2>
        )}
      </div>
    </section>
  );
};

// == Container
const mapStateToProps = (state) => ({
  watchlist: state.watchlist,
});

const mapDispatchToProps = (dispatch) => ({

});

const container = connect(mapStateToProps, mapDispatchToProps)(Watchlist);

export default container;
