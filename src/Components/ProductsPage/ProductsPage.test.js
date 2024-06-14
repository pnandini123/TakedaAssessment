import React from "react";
import { render, screen } from "@testing-library/react";
import ProductPage from "./index";

jest.mock("../../Images/woodenchairpink.jpg", () => "woodenchairpink.jpg");
jest.mock("../../Images/woodenchairgray.jpg", () => "woodenchairgray.jpg");

describe("ProductPage component", () => {
  test("renders product image and title correctly", () => {
    render(<ProductPage />);

    const productImage = screen.getByAltText("Scandinavian Collection Chair");
    expect(productImage).toBeInTheDocument();

    const productTitle = screen.getByText("Scandinavian Collection");
    expect(productTitle).toBeInTheDocument();
  });

  test("renders thumbnails for different chair colors", () => {
    render(<ProductPage />);

    const thumbnails = screen.getAllByRole("img", { name: /Thumbnail/i });
    expect(thumbnails).toHaveLength(3);
  });

  test("displays product details including price and buy button", () => {
    render(<ProductPage />);

    const productDetails = screen.getByText("Kappu Regular Chair");
    expect(productDetails).toBeInTheDocument();

    const price = screen.getByText("$2,600");
    expect(price).toBeInTheDocument();

    const buyButton = screen.getByText("Buy Now");
    expect(buyButton).toBeInTheDocument();
  });
});
