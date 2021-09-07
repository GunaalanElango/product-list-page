import { render, screen } from "@testing-library/react";
import Products from "./Products";

describe("Products component", () => {
  test("Renders 'No results found' message if no products available", () => {
    render(<Products list={[]} />);

    const headingElement = screen.getByText(/sorry, no results found/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("Render the product", () => {
    render(
      <Products list={[{ imageURL: "s", name: "bat", price: 123, id: 1 }]} />
    );

    const productEl = screen.getByAltText("Product");
    expect(productEl).toBeInTheDocument();
  });

  test("Does not render the message if products available", () => {
    render(
      <Products list={[{ imageURL: "s", name: "bat", price: 123, id: 1 }]} />
    );

    const headingElement = screen.queryByText(/sorry, no results found/i);
    expect(headingElement).not.toBeInTheDocument();
  });

  test("Check no of products", () => {
    render(
      <Products list={[{ imageURL: "s", name: "bat", price: 123, id: 1 }]} />
    );

    const spanEl = screen.getByTestId("length");
    expect(parseInt(spanEl.textContent)).toBe(1);
  });
});
