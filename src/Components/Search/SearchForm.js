import React from 'react';
import './SearchForm.scss';

import SearchIcon from '../../Icons/SearchIcon';

const Search = (props) => {
  return (
    <div className="search">
      <form className="search__form search-form" onSubmit={props.onSubmit}>
        <div className="search-form__input-wrapper">
          <input
            type="text"
            className="search-form__input"
            onChange={props.onInput}
            value={props.value}
            placeholder="friends searching"
          />
          <span className="search-form__icon">
            <SearchIcon width="1.5rem" height="1.5rem" />
          </span>
        </div>
        <button className="btn search-form__btn">Search</button>
      </form>
    </div>
  );
};

export default Search;
