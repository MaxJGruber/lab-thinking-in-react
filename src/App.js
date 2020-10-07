import React from 'react';
import data from './data.json';
import './App.css';
import ProductRow from './Components/ProductRow';
import ProductTable from './Components/ProductTable';
import SearchBar from './Components/SearchBar';
import FilterableProductTable from './Components/FilterableProductTable';

function App() {
  
  return (
    <div className="App">
      <FilterableProductTable products={data} />
    </div>
  );
}

export default App;
