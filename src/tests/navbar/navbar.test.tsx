import { describe, expect, it } from "vitest";
import Navbar from "../../component/navbar/Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar component", () => {
  it("Nav bar rendered correctly", () => {
    render(<Navbar />);
    expect(screen.getByText(/Menu/i)).toBeInTheDocument();
    expect(screen.getByText(/How It Works/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 6 })).toBeInTheDocument();
  });
});
