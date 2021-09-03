import React from "react";
import { backend } from "../../constants/urls";

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
          console.log(data);
          setPokemonData(data);
        });
    }
  }, [pokemonObj]);

  const data = tag => {
    if (!pokemonData) {
      return pokemonObj[tag] ?? "";
    }
    return pokemonData[tag];
  };

  return (
    <section>
      <h2>{data("name")}</h2>
      <p>{data("national_pokedex_num")}</p>
    </section>
  );
};

export default PokemonInfo;
