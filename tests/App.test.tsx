import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { App } from '../src/App';

describe('App', () => {
  it('renders heading', () => {
    const { getByText } = render(<App />);
    expect(getByText(/D&D Vibe/i)).toBeTruthy();
  });
});
