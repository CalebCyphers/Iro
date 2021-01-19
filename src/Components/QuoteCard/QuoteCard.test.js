import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuoteCard from "./QuoteCard.js";

const mockQuote = {
  _id: "101010",
  quoteText: "We have nothing to fear except fear itself.",
  quoteAuthor: "Franklin D. Roosevelt",
  quoteGenre: "Inspirational"
};

describe("QuoteCard", () => {

  it("Should display a quote and an author", () => {
    render(<QuoteCard quote={mockQuote}/>)
    const quoteBody = screen.getByText("We have nothing to fear except fear itself.");
    const quoteAuthorText = screen.getByText("-Franklin D. Roosevelt");

    expect(quoteBody).toBeInTheDocument();
    expect(quoteAuthorText).toBeInTheDocument();
  })
})