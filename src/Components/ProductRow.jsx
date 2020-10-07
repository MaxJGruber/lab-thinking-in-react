import React from 'react';

const ProductRow = ({ name, price, stocked }) => {
  //   console.log(stocked);
  const color = stocked ? 'black' : 'red';
  //   console.log(color);
  const tdStyle = {
    color: `${color}`,
  };
  return (
    <tr>
      <td style={tdStyle}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};
export default ProductRow;
