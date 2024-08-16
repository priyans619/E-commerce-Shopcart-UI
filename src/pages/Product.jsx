import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { setProducts } from '../redux/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => dispatch(setProducts(data.products)));
  }, [dispatch]);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto mt-32 px-8 sm:px-4 lg:px-24">
      <h1 className="text-2xl font-semibold mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Pagination UI */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
