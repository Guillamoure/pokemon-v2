import { screen, render } from "@testing-library/react";

import PokemonDetails from "./PokemonDetails";

describe("Artwork", () => {
  // test.todo("displays official artwork if it exists");
  // test.todo("displays front sprite if official artwork is not present");
  // test.todo("displays back sprite if front sprite is not present");
  test("displays default artwork with no artwork present", () => {
    render(<PokemonDetails pokemon={{}} />);
    const img = screen.getByRole("img");
    expect(img.alt).toBe("missingno");
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
