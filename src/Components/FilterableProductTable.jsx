import React from 'react';
import data from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';

class FilterableProductTable extends React.Component {
  state = {
    productList: data,
  }

  render() {
    return (
      <div>
        <h1 className="title">IronStore</h1>
        <SearchBar />
        
        <ProductTable product={this.state.productList} />
      </div>
    );
  }
}
export default FilterableProductTable;
