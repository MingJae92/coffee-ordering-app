import { render, screen } from "@testing-library/react";
import Hero from "../../component/hero/Hero";
import { describe, it, expect } from "vitest";

describe("Hero component", () => {
  it("renders all elements correctly", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /Welcome to Coffee and CODE! Coffee!/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Freshly brewed coffee before SOC Eng service starts!/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Scent the coffee as you walk up service, the Lord is waiting upon your arrival!/i)
    ).toBeInTheDocument()
    
  });
});
