import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <table>
          <thead>
            <th>Name</th>
            <th>Price</th>
          </thead>
          <tbody>
            <ProductRow />
          </tbody>
        </table>
      </div>
    );
  }
}
export default ProductTable;
