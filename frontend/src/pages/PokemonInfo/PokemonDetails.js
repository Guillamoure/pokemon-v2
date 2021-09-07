import React from "react";

const PokemonDetails = ({ pokemon }) => {
  const {
    name,
    national_pokedex_num: num,
    front_sprite,
    back_sprite
  } = pokemon;

  const sprite = () => {
    let src = front_sprite || back_sprite || "missingno.png";
    let alt = name;
    if (src === "missingno.png") {
      alt = "missingno";
    }
    return <img src={src} alt={alt} />;
  };

  return (
    <section>
      <h2>{name}</h2>
      <span>{num}</span>
      <div>{sprite()}</div>
    </section>
  );
};

export default PokemonDetails;
