// Footer.test.tsx or Footer.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../../component/footer/Footer';


describe("Footer component", () => {
  it("renders the footer text correctly", () => {
    render(<Footer />);
    const footerText = screen.getByText(/© 2025 Coffee and CODE!, All rights reserved./i);
    expect(footerText).toBeInTheDocument();
  });
});
