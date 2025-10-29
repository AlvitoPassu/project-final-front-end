import React from "react";
import Home from "./components/home";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  let hello = "Hello World";
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;