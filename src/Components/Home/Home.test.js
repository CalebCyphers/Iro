import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom"
import { userEvent } from "@testing-library/user-event";
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

  it("Should display a Next and Save button", () => {
    render(
      <Home
        quote={mockQuote}
        newQuote={mockSetDefaultQuote}
        saveQuote={mockSaveQuote}
      />
    );
    const saveButton = screen.getByText("Save")
    const nextButton = screen.getByText("Next")

    expect(saveButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  it("Should display a loading message if there is no quote yet", () => {
    render(
      <Home
        quote={{}}
        newQuote={mockSetDefaultQuote}
        saveQuote={mockSaveQuote}
      />
    );
    const loadingMessage = screen.getByText("Loading...")

    expect(loadingMessage).toBeInTheDocument()
  })

  it("Should call a function when the Save button is clicked", () => {
    render(<Home
        quote={mockQuote}
        newQuote={mockSetDefaultQuote}
        saveQuote={mockSaveQuote}
      />
      );
      const saveButton = screen.getByText("Save")

      userEvent().click(saveButton)

      expect(mockSaveQuote).toHaveBeenCalled()
  })
  userEvent()
});
