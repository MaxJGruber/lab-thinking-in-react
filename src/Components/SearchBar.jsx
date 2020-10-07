import React from 'react';
import FilterableProductTable from './FilterableProductTable';

class SearchBar extends React.Component {
  state = {};

  //   handleFilter = (event) => {
  //     const value = event.target.value;
  //     const key = event.target.name;
  //     console.log(value, key);

  //     this.setState({});
  //   };

  render() {
    return (
      <div>
        <h3 className="search-title">Search</h3>
        <form className="Form" onChange={this.props.handleFilter}>
          <input type="text" id="searchbar-input" name="searchbar" />
          <label htmlFor="checkbox" id="checkbox">
            Only show products on stock
          </label>
          <input type="checkbox" id="checkbox" />
        </form>
      </div>
    );
  }
}
export default SearchBar;
