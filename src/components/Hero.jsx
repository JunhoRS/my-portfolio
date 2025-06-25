import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg text-gray-700 mb-8">
            Discover amazing content and connect with our community.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}   