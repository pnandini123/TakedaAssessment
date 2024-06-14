import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./index";

describe("HomePage component", () => {
  test("renders product cards with product details", () => {
    render(<HomePage />);

    const productRating = screen.getByText("5");
    expect(productRating).toBeInTheDocument();

    const productCategory = screen.getByText("Category");
    expect(productCategory).toBeInTheDocument();

    const productPrice = screen.getByText("$2,600");
    expect(productPrice).toBeInTheDocument();
  });
});
