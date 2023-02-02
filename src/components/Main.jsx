import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import Pagination from "./Pagination";
import Table from "./Table";
import "./main.css";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [mergedArray, setMergedArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(mergedArray);
  }, [mergedArray, currentPage]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://reqres.in/api/products?page=1");
        setProducts(res.data.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://reqres.in/api/products?page=2");
        setProducts2(res.data.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setMergedArray([...products, ...products2]);
  }, [products, products2]);

  const handleFilterChange = (event) => {
    if (event.target.value) {
      const filtered = mergedArray.filter(
        (product) => product.id === Number(event.target.value)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(mergedArray);
    }
  };

  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      {error && <div>Error: {error}</div>}
      <div className="_input">
        <input
          type="text"
          onChange={handleFilterChange}
          placeholder="Filter by id"
          pattern="[0-9]*"
        />
        
      </div>
      <Table
        products={currentProducts}
        setSelectedProduct={setSelectedProduct}
        setShowModal={setShowModal}
      />

      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        total={mergedArray.length}
        perPage={5}
      />
      {showModal && (
        <Modal product={selectedProduct} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Main;
