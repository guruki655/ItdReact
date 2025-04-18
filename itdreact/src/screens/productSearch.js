import React, { useState, useEffect } from 'react';
import ProductItemSmall from '../components/productItemSmall';
import Sidebar from '../components/sidebar';

const ProductsSearch = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); // Initially show all products
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const applyFilters = (filters) => {
    let filtered = [...products];

    // Filter by category
    if (filters.category.length > 0) {
      filtered = filtered.filter(product =>
        filters.category.some(cat =>
          product.category.toLowerCase().includes(cat.toLowerCase())
        )
      );
    }

    // Filter by brand (dummy check based on title for now)
    if (filters.brand.length > 0) {
      filtered = filtered.filter(product =>
        filters.brand.some(brand =>
          product.title.toLowerCase().includes(brand.toLowerCase())
        )
      );
    }

    // Filter by price
    if (filters.priceRange) {
      filtered = filtered.filter(product => product.price <= parseFloat(filters.priceRange));
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="row">
      <Sidebar applyFilters={applyFilters} />
      <div className='col-md-9'>
        <div className='container-fluid'>
          <div className='row'>
            {filteredProducts.map(product => (
              <ProductItemSmall key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSearch;
