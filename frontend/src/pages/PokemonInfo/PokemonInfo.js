import React from "react";
import { backend } from "../../constants/urls";

import PokemonDetails from "./PokemonDetails";

const PokemonInfo = ({ pokemonObj }) => {
  const [pokemonData, setPokemonData] = React.useState(null);

  React.useEffect(() => {
    if (
      pokemonObj.name === undefined ||
      pokemonObj.national_pokedex_num === undefined
    ) {
      let identifier = pokemonObj.name || pokemonObj.national_pokedex_num;
      fetch(backend("pokemon/" + identifier))
        .then(r => r.json())
        .then(data => {
          setPokemonData(data);
        });
    }
  }, [pokemonObj]);

  const data = pokemonData || pokemonObj;

  return (
    <main>
      <PokemonDetails pokemon={data} />
    </main>
  );
};

export default PokemonInfo;
