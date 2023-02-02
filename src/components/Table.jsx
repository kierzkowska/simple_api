import React from "react";
import './table.css'

const Table = ({ products, setSelectedProduct, setShowModal }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      {products.map((item) => (
        <tr className="row"
          key={item.id}
          onClick={() => {
            setSelectedProduct(item);
            setShowModal(true);
          }}
          style={{ backgroundColor: item.color }}
        >
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.year}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
