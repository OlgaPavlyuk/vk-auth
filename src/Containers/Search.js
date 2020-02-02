import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getFriends, clearSearch } from '../actions/searchActions';
import SearchForm from '../Components/Search/SearchForm';
import Friends from '../Components/Friends/Friends';

const Search = (props) => {
  const [query, setQuery] = useState('');
  const { search, getFriends, clearSearch } = props;

  const handleChange = ({ target }) => {
    const newQuery = target.value;
    if (!newQuery) {
      clearSearch();
    }
    setQuery(target.value);
  }

  const onSubmit = (e) => { 
    e.preventDefault();
    getFriends(query);
  }

  return (
    <>
      <SearchForm onSubmit={onSubmit} value={query} onInput={handleChange} />
      {search.isSearch && <Friends {...search} />}
    </>
  );
};

const mapStateToProps = (store) => {
  return {
    search: store.search,
  }
}

const mapDispatchToProps = dispatch => ({
  getFriends: (query) => dispatch(getFriends(query)),
  clearSearch: () => dispatch(clearSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
