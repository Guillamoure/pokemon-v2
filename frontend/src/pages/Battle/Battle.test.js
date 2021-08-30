import Battle from "./Battle";
import { screen, render } from "@testing-library/react";

test("Battle works without error", () => {
  render(<Battle />);
  const header = screen.getByRole("heading");
  expect(header).toBeInTheDocument();
});
