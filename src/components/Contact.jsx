import React from "react";

export default function Contact() {
  return (
    <section data-aos="fade-up" data-aos-delay="300" className="min-h-screen overflow-hidden flex items-center p-6 mt-10 relative">
      <article className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <aside className="mb-6">
        <div className="flex items-center mb-4">
          
        </div>
        </aside>

        <section className="p-8 w-full md:w-1/2">
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-center text-white">Contact Us</h2>
          </header>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Junho</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Junho C. Ramos"
                required
              />
            </div>
          </form>
        </section>
      </article>
    </section>
  );
}