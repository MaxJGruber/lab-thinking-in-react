import React from 'react';
import data from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';

class FilterableProductTable extends React.Component {
  
  state = {
    searchValue: '',
    productList: data.data,
    checkboxChecked: false,
  };


  handleFilter = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    
    if(key === "searchbar") {
      if(value) {
        const filtered = this.state.productList.filter((element) => element.name.toLowerCase().includes(value));
        this.setState({
          searchValue: value,
          productList: filtered,
        });
      }
    } else {
      this.setState({
        searchValue: "",
        productList: data.data
      });
    }

    if(key === "checkbox" ){
      if(this.state.checkboxChecked === false) {
        this.setState({
          productList: this.state.productList.filter((element) => element.stocked),
          checkboxChecked: true,
        });
      } else {
        this.setState({
          productList: data.data,
          checkboxChecked: false,
        });
      }
    
    }
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
