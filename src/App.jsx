import React from "react";
import Home from "./components/home";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header title="This is a Header component" />
      <Home title="This is a Home component" />
      <Footer title="This is a Footer component" />
    </>
  );
};

export default App;