import { screen, render } from "@testing-library/react";
import PokemonInfo from "./PokemonInfo";

const mockPokemonData = {
  name: "Ditto"
};

test.todo("renders without error");

test("render with complete prop data", () => {
  render(<PokemonInfo pokemonObj={mockPokemonData} />);
  const pokemonName = screen.getByText(mockPokemonData.name);
  expect(pokemonName).toBeInTheDocument();
});

test.todo("render with identifier prop data");
