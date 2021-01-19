import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom"
import App from "./App.js";
import { getRandomQuote } from "../../apiCalls.js"
jest.mock("../../apiCalls.js")

const mockResponse = {
  _id: "101010",
  quoteText: "We have nothing to fear except fear itself.",
  quoteAuthor: "Franklin D. Roosevelt",
  quoteGenre: "Inspirational"
}

describe("App", () => {
  it("Should render a NavBar and a quote", async () => {
    getRandomQuote.mockResolvedValueOnce(mockResponse)
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const homeLink = screen.getByText("Home")
    const myQuotesLink = screen.getByText("My Quotes")
    const quoteText = await waitFor(screen.getByText("We have nothing to fear except fear itself."))
    const quoteAuthorText = await waitFor(screen.getByText("Franklin D. Roosevelt"))
    const nextButton = screen.getByText("Next")
    const saveButton = screen.getByText("save")

    expect(homeLink).toBeInTheDocument()
    expect(myQuotesLink).toBeInTheDocument()
    expect(quoteText).toBeInTheDocument()
    expect(quoteAuthorText).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
    expect(saveButton).toBeInTheDocument()
  })
})