import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';

class FilterableProductTable extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="title">IronStore</h1>
        <SearchBar />
        <ProductTable />
        {/* <ProductRow /> */}
      </div>
    );
  }
}
export default FilterableProductTable;
