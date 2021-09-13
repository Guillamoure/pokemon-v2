import { screen, render } from "@testing-library/react";

import PokemonDetails from "./PokemonDetails";

let pokemonData = {
  name: "Ditto",
  official_artwork:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
  front_sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  back_sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
};

describe("Artwork", () => {
  test("displays official artwork if it exists", () => {
    render(<PokemonDetails pokemon={pokemonData} />);

    const img = screen.getByRole("img");

    expect(img).toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
    );
    expect(img).not.toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    );
    expect(img).not.toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
    );

    expect(img).toHaveProperty("alt", "ditto artwork");
  });
  // test.todo("displays front sprite if official artwork is not present");
  // test.todo("displays back sprite if front sprite is not present");
  test("displays default artwork with no artwork present", () => {
    render(<PokemonDetails pokemon={{}} />);
    const img = screen.getByRole("img");
    expect(img).toHaveProperty("alt", "missingno");
  });
  // test.todo("can click on carousel to view a different image");
  // test.todo("carousel will not do anything if there is no other image");
  // test.todo("displays thumbnail image above larger artwork");
  // test.todo("displays default image with no thumbnail image");
  // test.todo("shiny toggle will update front and back sprite");
  // test.todo(
  //   "shiny toggle will not do anything if there is no front or back sprite"
  // );
});