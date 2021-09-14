import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
  test("displays front sprite if official artwork is not present", () => {
    render(
      <PokemonDetails pokemon={{ ...pokemonData, official_artwork: null }} />
    );

    const img = screen.getByRole("img");

    expect(img).toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    );
    expect(img).not.toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
    );
    expect(img).not.toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
    );

    expect(img).toHaveProperty("alt", "ditto artwork");
  });
  test("displays back sprite if front sprite and official artwork is not present", () => {
    render(
      <PokemonDetails
        pokemon={{ ...pokemonData, official_artwork: null, front_sprite: null }}
      />
    );

    const img = screen.getByRole("img");

    expect(img).toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
    );
    expect(img).not.toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
    );
    expect(img).not.toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    );

    expect(img).toHaveProperty("alt", "ditto artwork");
  });
  test("displays default artwork with no artwork present", () => {
    render(<PokemonDetails pokemon={{}} />);
    const img = screen.getByRole("img");
    expect(img).toHaveProperty("alt", "missingno");
  });
  test("can click on carousel to view a different image", () => {
    render(<PokemonDetails pokemon={pokemonData} />);

    const img = screen.getByRole("img");

    expect(img).toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
    );

    userEvent.click(img);
    expect(img).toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    );

    userEvent.click(img);
    expect(img).toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
    );

    userEvent.click(img);
    expect(img).toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
    );
  });
  test("carousel will not do anything if there is no other image", () => {
    render(
      <PokemonDetails
        pokemon={{ ...pokemonData, front_sprite: null, back_sprite: null }}
      />
    );

    const img = screen.getByRole("img");

    expect(img).toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
    );

    userEvent.click(img);
    expect(img).toHaveProperty(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
    );
  });
  // test.todo("displays thumbnail image above larger artwork");
  // test.todo("displays default image with no thumbnail image");
  // test.todo("shiny toggle will update front and back sprite");
  // test.todo(
  //   "shiny toggle will not do anything if there is no front or back sprite"
  // );
});
