import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Trello Clone App");
  expect(linkElement).toBeInTheDocument();
});
