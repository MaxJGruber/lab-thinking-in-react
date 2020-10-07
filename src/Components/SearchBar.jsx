import React from 'react';

class SearchBar extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h3 className="search-title">Search</h3>
        <input type="text" id="searchbar-input" />
        <label htmlFor="checkbox" id="checkbox">
          Only show products on stock
        </label>
        <input type="checkbox" id="checkbox" />
      </div>
    );
  }
}
export default SearchBar;
