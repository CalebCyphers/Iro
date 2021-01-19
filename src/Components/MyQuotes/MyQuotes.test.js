import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import MyQuotes from "./MyQuotes.js";

const mockSavedQuotes = [
  {
    _id: "101010",
    quoteText: "We have nothing to fear except fear itself.",
    quoteAuthor: "Franklin D. Roosevelt",
    quoteGenre: "Inspirational",
  },
  {
    _id: "101012",
    quoteText: "We have nothing to fear except bees.",
    quoteAuthor: "Bee Fearer",
    quoteGenre: "Instructional",
  },
];

describe("MyQuotes", () => {
  it("Should display a message if there are no quotes", () => {
    render(<MyQuotes savedQuotes={[]} />);
    const errorMessage = screen.getByText(
      "You haven't saved any quotes... once you do, they'll show up here."
    );

    expect(errorMessage).toBeInTheDocument();
  });

  it("Should render cards if there are saved quotes", () => {
    render(<MyQuotes savedQuotes={mockSavedQuotes} />);
    const firstQuote = screen.getByText("We have nothing to fear except fear itself.")
    const secondQuote = screen.getByText("We have nothing to fear except bees.")

    expect(firstQuote).toBeInTheDocument()
    expect(secondQuote).toBeInTheDocument()
  });
});
