import React from "react";
import './modal.css';

const Modal = ({ product, onClose }) => {
  return (
    <div className="main">
      <div className="_style"  onClick={onClose} />
      <div className="el_">
        <h2>{product.name}</h2>
        <p>ID: {product.id}</p>
        <p>Year: {product.year}</p>
        <p>Colour: {product.color}</p>
        <button className="_close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;