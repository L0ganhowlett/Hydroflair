import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { products } from '../constants'; // Ensure the path is correct
import Footer from './Footer';

const ProductDetails = () => {
  const { category } = useParams();
  const location = useLocation();
  
  // Extracting the full category path
  const fullCategory = location.pathname.split('/').slice(2).join('/');

  console.log('Category:', fullCategory);

  const productItems = products[fullCategory] || [];

  console.log('Product Items:', productItems);

  if (productItems.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">No Products Found</h1>
        <p className="text-gray-600">Sorry, we couldn't find any products for this category.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productItems.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-6">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-60 object-cover mb-4 rounded-lg" 
            />
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-lg mb-4">{product.description}</p>
            <a
              href="#"
              className="inline-flex justify-center items-center w-full h-12 px-6 text-white bg-blue-600 hover:bg-blue-800 rounded transition duration-300"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
