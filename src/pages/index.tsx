import React from 'react';

export default function HeroBanner() {
  const handleClick = (msg: string) => {
    alert(`You clicked: ${msg}`);
  };

  return (
    <div className="w-full h-screen relative bg-gray-200">
      {/* Background image with fallback color */}
      <img 
        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80" 
        alt="Luxury Bathroom" 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold text-center px-4">Create Your Dream Bathroom</h1>
        <p className="mt-4 text-xl text-center px-4">Luxury Bathroom Furniture & Fixtures</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => handleClick('Shop Collections')}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-lg"
          >
            Shop Collections
          </button>
          <button 
            onClick={() => handleClick('Shop the Look')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all shadow-lg"
          >
            Shop the Look
          </button>
        </div>
      </div>
    </div>
  );
}
