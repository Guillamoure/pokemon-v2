import React from "react";

const PokemonInfo = ({ pokemonObj }) => {
  const { name } = pokemonObj;
  return (
    <section>
      <h2>{name}</h2>
    </section>
  );
};

export default PokemonInfo;
