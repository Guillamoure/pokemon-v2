import CreateCampaign from "./CreateCampaign";
import { screen, render } from "@testing-library/react";

test("render component without error", () => {
  render(<CreateCampaign />);
  const heading = screen.getByRole("heading", { name: "Create Campaign" });
  expect(heading).toBeInTheDocument();
});

test.todo("push button generate campaign url");
