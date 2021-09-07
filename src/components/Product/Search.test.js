import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Search Components", () => {
  test("Render search component", () => {
    render(<Search searchFunction={jest.fn()} />);

    const inputEl = screen.getByPlaceholderText(/Search for products/i);
    expect(inputEl).toBeInTheDocument();
  });

  test("Reset the input value when submitted", () => {
    render(<Search searchFunction={jest.fn()} />);

    const inputEl = screen.getByPlaceholderText(/Search for products/i);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(inputEl.value).toBe("");
  });
});
