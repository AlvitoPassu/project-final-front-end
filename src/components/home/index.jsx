import React from "react";

const Home = ({ title }) => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
    </div>
  );
};

export default Home;
