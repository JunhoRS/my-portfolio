import React from 'react';

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            We are dedicated to providing the best service and experience for our users. Our team is passionate about creating innovative solutions that make a difference.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}