import { screen, render } from "@testing-library/react";
import PokemonInfo from "./PokemonInfo";

const mockPokemonData = {
  name: "Ditto",
  national_pokedex_num: 132
};

const onlyNumMockPokemonData = {
  national_pokedex_num: 132
};

test.todo("renders without error");

test("render with complete prop data", () => {
  render(<PokemonInfo pokemonObj={mockPokemonData} />);
  const pokemonName = screen.getByText(mockPokemonData.name);
  const pokemonNum = screen.getByText(mockPokemonData.national_pokedex_num);
  expect(pokemonName).toBeInTheDocument();
  expect(pokemonNum).toBeInTheDocument();
});

test("render with identifier national_pokedex_num prop data", async () => {
  render(<PokemonInfo pokemonObj={onlyNumMockPokemonData} />);
  const pokemonName = await screen.findByText(mockPokemonData.name);
  expect(pokemonName).toBeInTheDocument();
});

test.todo("render with identifier name prop data");
