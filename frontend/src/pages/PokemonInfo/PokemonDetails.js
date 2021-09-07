import React from "react";

const PokemonDetails = ({ pokemon }) => {
  const { name, national_pokedex_num: num } = pokemon;

  return (
    <section>
      <h2>{name}</h2>
      <span>{num}</span>
    </section>
  );
};

export default PokemonDetails;
