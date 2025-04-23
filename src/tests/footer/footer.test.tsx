// Footer.test.tsx or Footer.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../../component/footer/Footer';
import React from 'react';

describe("Footer component", () => {
  it("renders the footer text correctly", () => {
    render(<Footer />);
    const footerText = screen.getByText(/© 2025 BrewBuddy. All rights reserved./i);
    expect(footerText).not.toBeNull();
  });
});
