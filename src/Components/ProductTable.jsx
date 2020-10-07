import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {/* {console.log(this.props.product)} */}
            {this.props.product.data.map((element, i) => (
              <ProductRow
                name={element.name}
                price={element.price}
                stocked={element.stocked}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ProductTable;
