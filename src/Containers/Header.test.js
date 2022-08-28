import { render, screen } from "@testing-library/react";
import Header from "./Header.tsx";

test("Checkbox is rendered", () => {
  render(<Header />);

  expect(screen.getByRole("checkbox"));
});
