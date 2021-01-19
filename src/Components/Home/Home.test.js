import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
import Home from "./Home.js";

const mockSetDefaultQuote = jest.fn();
const mockSaveQuote = jest.fn();
const mockQuote = {
  _id: "101010",
  quoteText: "We have nothing to fear except fear itself.",
  quoteAuthor: "Franklin D. Roosevelt",
  quoteGenre: "Inspirational"
};

describe("Home", () => {
  it("Should render a quote and an author", () => {
    render(
      <Home
        quote={mockQuote}
        newQuote={mockSetDefaultQuote}
        saveQuote={mockSaveQuote}
      />
    );
    const quoteBody = screen.getByText("We have nothing to fear except fear itself.");
    const quoteAuthorText = screen.getByText("-Franklin D. Roosevelt");

    expect(quoteBody).toBeInTheDocument();
    expect(quoteAuthorText).toBeInTheDocument();
  });
});
