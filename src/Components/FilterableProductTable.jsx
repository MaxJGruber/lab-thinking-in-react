import React from 'react';
import data from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';

class FilterableProductTable extends React.Component {
  state = {
    searchValue: '',
    productList: data,
  };
  handleFilter = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    const copy = [...this.state.productList.data];
    console.log(copy);
    // let filtered = new Array(1).fill(1);
    const filtered = copy.filter((element) => element.name.includes(value));
    console.log('>>>>>>>>', filtered);
    this.setState({
      searchValue: value,
    //   productList: filtered,
    });
  };

  render() {
    return (
      <div>
        <h1 className="title">IronStore</h1>
        <SearchBar
          product={this.state.productList}
          handleFilter={this.handleFilter}
        />

        <ProductTable product={this.state.productList} />
      </div>
    );
  }
}
export default FilterableProductTable;
