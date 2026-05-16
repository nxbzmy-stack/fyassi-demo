import React, { useRef } from 'react';

export default function HeroBanner() {
  const productsRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    { id: 1, name: 'Modern Vanity', price: '$899', image: 'https://images.unsplash.com/photo-1620626011761-9963d7b59639?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Gold Fixtures', price: '$249', image: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Luxury Bathtub', price: '$2,499', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Wall Mirror', price: '$129', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <div className="w-full h-screen relative bg-gray-200">
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Bathroom" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold text-center px-4 leading-tight">Create Your Dream Bathroom</h1>
          <p className="mt-4 text-xl text-center px-4 max-w-2xl">Elevate your daily ritual with our curated collection of luxury furniture and premium fixtures.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToProducts}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Shop Collections
            </button>
            <button 
              onClick={scrollToProducts}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all shadow-lg"
            >
              Shop the Look
            </button>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div ref={productsRef} className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-8 text-center text-gray-400">
        <p>&copy; 2026 Fyassi Demo Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
