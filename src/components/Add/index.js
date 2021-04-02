import React from "react";
import { connect } from 'react-redux';

import { changeSearchField, getMovies } from '../../store/actions';

const Add = ({ search, handleChangeSearch, results }) => {

  const onChange = (e) => {
    e.preventDefault();
    handleChangeSearch(e.target.value);
  }

  return (
    <section className="add">
      <div className="container">
        <div className="add__content">
          <div className="add__input-container">
            <input
              className="add__input__field"
              type="text"
              placeholder="Search for a movie"
              value={search}
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="add__results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <h1>{movie.title}</h1>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

// == Container
const mapStateToProps = (state) => ({
  search: state.search.search,
  results: state.search.results
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeSearch: (value) => {
    dispatch(changeSearchField(value));
    dispatch(getMovies());
  }
});

const container = connect(mapStateToProps, mapDispatchToProps)(Add);

export default container;

