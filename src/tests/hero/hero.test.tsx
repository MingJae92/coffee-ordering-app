import { render, screen } from "@testing-library/react";
import Hero from "../../component/hero/Hero";
import { describe, it, expect } from "vitest";

describe("Hero component", () => {
  it("renders all elements correctly", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /welcome to brewbuddy coffee/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/freshly brewed coffee, delivered to your door/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /order now/i })
    ).toBeInTheDocument();
  });
});
