import React from "react";

const PokemonMoves = ({ moves }) => {
  const renderMoves = () => {
    if (Object.keys(moves).length === 0) {
      return <img src="missingno.png" alt="missingno" />;
    }
  };

  return <section>{renderMoves()}</section>;
};

export default PokemonMoves;
