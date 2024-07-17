import { describe, expect, test, vitest } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest'; // à factoriser dans setup-tests.ts + config typescript
import Counter, { CounterController } from './Counter';

describe('Counter component', () => {
  test('Counter renders', () => {
    render(<Counter />);
  });

  test('Counter increment on click', async () => {
    render(<Counter />);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});

describe('CounterController component', () => {
  test('Counter increment on click', async () => {
    const spy = vitest.fn();

    render(<CounterController count={0} onIncrement={spy} />);
    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalled();
  });
});
