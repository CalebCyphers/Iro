import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom"
import NavBar from "./NavBar.js";

describe("NavBar", () => {

  it("Should display a link to the homepage", () => {
    render(<MemoryRouter><NavBar /></MemoryRouter>)
    const homeLink = screen.getByText("Home")
    expect(homeLink).toBeInTheDocument()
  })

  it("Should display a link to the My Quotes page", () => {
    render(<MemoryRouter><NavBar /></MemoryRouter>)
    const myQuotesLink = screen.getByText("My Quotes")
    expect(myQuotesLink).toBeInTheDocument()
  })
})