import React from "react";

const Home = ({ title }) => {
  return (
    <section className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">Hello Ngabers</p>
      <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
};

export default Home;
