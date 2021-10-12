import { screen, render } from "@testing-library/react";
import PokemonMoves from "./PokemonMoves";

describe("moves", () => {
  test("will render default image if no data is passed in", () => {
    render(<PokemonMoves moves={{}} />);
    const img = screen.getByRole("img", { name: "missingno" });
    expect(img).toHaveProperty("alt", "missingno");
  });
  test.todo("will render moves if data is passed in");
  test.todo("switch to egg moves if selected");
  test.todo("switch to learned moves if selected");
});
