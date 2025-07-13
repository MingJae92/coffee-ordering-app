import { describe, expect, test } from "vitest";
import Navbar from "../../component/navbar/Navbar";
import { render, screen } from "@testing-library/react";
import { beforeEach } from "node:test";
import { MemoryRouter } from "react-router-dom";

describe("Navbar component", () => {
  beforeEach(() => {
    render(<Navbar />, { wrapper: MemoryRouter });
  });

  test("Logo link rendered", () => {
    const logoLink = screen.getByRole("link", { name: /coffee and code/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
  });

  test("Menu link rendered", () => {
    const menuLink = screen.getByRole("link", { name: /menu/i });
    expect(menuLink).toBeInTheDocument();
    expect(menuLink).toHaveAttribute("href", "/menu");
  });

  test("About link rendered", () => {
    const aboutLink = screen.getByRole("link", { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/about");
  });

  test("Login link rendered", ()=>{
    const loginLink = screen.getByRole("link", {name:/login/i});
    expect(loginLink).toBeInTheDocument()
    expect(loginLink).toHaveAttribute("href", "/login" )
  })
});
