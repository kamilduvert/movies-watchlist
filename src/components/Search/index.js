// == Packages
import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// == Actions
import { changeSearchField, getMovies } from '../../store/actions';

//== Components
import ResultCard from '../ResultCard'

const Search = ({ search, handleChangeSearch, results }) => {

  const onChange = (e) => {
    e.preventDefault();
    handleChangeSearch(e.target.value);
  }

  return (
    <section className="search">
      <div className="container">
        <div className="search__content">
          <div>
            <input
              className="search__input"
              type="text"
              placeholder="Search for a movie..."
              value={search}
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="search__results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleChangeSearch: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired
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

const container = connect(mapStateToProps, mapDispatchToProps)(Search);

export default container;

