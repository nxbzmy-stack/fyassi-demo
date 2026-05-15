import React from 'react';

export default function HeroBanner() {
  return (
    <div className="w-full h-screen relative">
      <img src="https://www.thebluespace.com.au/path-to-hero-image.jpg" alt="Luxury Bathroom" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold">Create Your Dream Bathroom</h1>
        <p className="mt-4 text-xl">Luxury Bathroom Furniture & Fixtures</p>
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 bg-black bg-opacity-50 rounded">Shop Collections</button>
          <button className="px-6 py-3 bg-black bg-opacity-50 rounded">Shop the Look</button>
        </div>
      </div>
    </div>
  );
}