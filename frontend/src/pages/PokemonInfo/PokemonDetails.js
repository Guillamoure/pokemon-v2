import React from "react";

const PokemonDetails = ({ pokemon }) => {
  const [activeImageKey, setActiveImageKey] = React.useState(null);

  React.useEffect(() => {
    if (!activeImageKey) {
      if (pokemon.official_artwork) {
        setActiveImageKey("official_artwork");
      } else if (pokemon.front_sprite) {
        setActiveImageKey("front_sprite");
      } else if (pokemon.back_sprite) {
        setActiveImageKey("back_sprite");
      }
    }
  }, [pokemon]);

  const { name, national_pokedex_num: num, icon } = pokemon;

  const image = () => {
    let src = "missingno.png";
    let alt = "missingno";
    if (activeImageKey) {
      src = pokemon[activeImageKey];
      alt = name?.toLowerCase() + "-artwork" ?? null;
    }
    return <img src={src} alt={alt} />;
  };

  const updateImage = () => {
    if (activeImageKey === "official_artwork") {
      if (pokemon.front_sprite) {
        setActiveImageKey("front_sprite");
      } else if (pokemon.back_sprite) {
        setActiveImageKey("back_sprite");
      }
    } else if (activeImageKey === "front_sprite") {
      if (pokemon.back_sprite) {
        setActiveImageKey("back_sprite");
      } else if (pokemon.official_artwork) {
        setActiveImageKey("official_artwork");
      }
    } else if (activeImageKey === "back_sprite") {
      if (pokemon.official_artwork) {
        setActiveImageKey("official_artwork");
      } else if (pokemon.front_sprite) {
        setActiveImageKey("front_sprite");
      }
    }
  };

  return (
    <section>
      <h2>{name}</h2>
      <span>{num}</span>
      <span>
        <img src={icon} alt={name?.toLowerCase() + " icon" ?? ""} />
      </span>
      <div onClick={updateImage}>{image()}</div>
    </section>
  );
};

export default PokemonDetails;
