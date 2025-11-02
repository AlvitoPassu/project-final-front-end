import React from "react";
import Gen1 from "./gen 1";
import Gen2 from "./gen 2";
import Gen3 from "./gen 3";
import Gen4 from "./gen 4";

const Generations = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Pokémon Generations
      </h2>

      {/* Kirim props bernama 'teks' ke tiap komponen */}
      <Gen1 teks="Generation 1 - Bulbasaur, Charmander, Squirtle" />
      <Gen2 teks="Generation 2 - Chikorita, Cyndaquil, Totodile" />
      <Gen3 teks="Generation 3 - Treecko, Torchic, Mudkip" />
      <Gen4 teks="Generation 4 - Turtwig, Chimchar, Piplup" />
    </div>
  );
};

export default Generations;
