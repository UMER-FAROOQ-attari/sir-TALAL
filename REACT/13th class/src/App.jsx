import React, { useState, useEffect } from 'react';
import { FaStar, FaShoppingCart, FaSearch } from 'react-icons/fa';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // 1. API se Data Fetch karna (useEffect)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      });
  }, []);

  // 2. Search aur Filter Logic
  useEffect(() => {
    let result = products;

    // Category Filter
    if (category !== 'all') {
      result = result.filter((p) => p.category === category);
    }

    // Search Filter
    if (searchTerm !== '') {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [category, searchTerm, products]);

  // Loading Screen
  if (loading) {
    return <div className="text-center mt-20 text-2xl font-bold">Loading Products...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      
      {/* --- HEADER / NAVBAR --- */}
      <nav className="bg-orange-500 p-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold text-white">Daraz Clone</h1>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search in Daraz..."
              className="w-full p-2 pl-10 rounded-md outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
          </div>

          <div className="text-white text-2xl cursor-pointer">
            <FaShoppingCart />
          </div>
        </div>
      </nav>

      {/* --- FILTERS --- */}
      <div className="container mx-auto p-4 my-4 flex flex-wrap justify-center gap-3">
        {['all', "men's clothing", "women's clothing", 'electronics', 'jewelery'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full capitalize font-semibold transition ${
              category === cat 
              ? 'bg-orange-500 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- PRODUCT GRID --- */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition flex flex-col justify-between h-full">
              
              {/* Image Area */}
              <div className="h-48 flex justify-center items-center mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="h-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div>
                <h3 className="font-bold text-gray-800 line-clamp-2" title={product.title}>
                  {product.title}
                </h3>
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-orange-500 font-bold text-xl">${product.price}</span>
                  <div className="flex items-center text-yellow-400 text-sm">
                    <FaStar className="mr-1" />
                    <span className="text-gray-600">
                      {product.rating.rate} ({product.rating.count})
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-1 capitalize">{product.category}</p>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition font-semibold">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        
        {/* No Results Found */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default App;