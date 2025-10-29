import React from "react";
import Home from "./components/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Gen1 from "./components/Gen1";
import Gen2 from "./components/Gen2";
import Gen3 from "./components/Gen3";
import Gen4 from "./components/Gen4";

// === Tambahkan komponen Generations di sini ===
const Generations = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Pokémon Generations
      </h2>
      <Gen1 text="Generation 1 - Bulbasaur, Charmander, Squirtle" />
      <Gen2 text="Generation 2 - Chikorita, Cyndaquil, Totodile" />
      <Gen3 text="Generation 3 - Treecko, Torchic, Mudkip" />
      <Gen4 text="Generation 4 - Turtwig, Chimchar, Piplup" />
    </div>
  );
};

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