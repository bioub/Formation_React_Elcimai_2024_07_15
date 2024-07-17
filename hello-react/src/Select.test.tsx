import { render, screen } from '@testing-library/react';
import { describe, expect, test, vitest } from 'vitest';
import Select, { SelectRef } from './Select';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';
import { act, createRef } from 'react';

describe('Select component', () => {
  test('renders', () => {
    render(
      <Select
        items={['Toto', 'Titi', 'Tata']}
        selected="Titi"
        onSelected={() => {}}
      />,
    );
  });

  test('renders selected prop', () => {
    render(
      <Select
        items={['Toto', 'Titi', 'Tata']}
        selected="Titi"
        onSelected={() => {}}
      />,
    );
    expect(screen.getByText('Titi')).toBeInTheDocument();
  });

  test('renders menu opens on click', async () => {
    render(
      <Select
        items={['Toto', 'Titi', 'Tata']}
        selected="Titi"
        onSelected={() => {}}
      />,
    );
    await userEvent.click(screen.getByText('Titi'));
    expect(screen.getByText('Toto')).toBeInTheDocument();
  });

  test('calls onSelected on item click', async () => {
    const spy = vitest.fn();

    render(
      <Select
        items={['Toto', 'Titi', 'Tata']}
        selected="Titi"
        onSelected={spy}
      />,
    );
    await userEvent.click(screen.getByText('Titi'));
    await userEvent.click(screen.getByText('Toto'));
    expect(spy).toHaveBeenCalledWith('Toto');
  });

  test('closes menu on window click', async () => {
    const spy = vitest.fn();

    render(
      <Select
        items={['Toto', 'Titi', 'Tata']}
        selected="Titi"
        onSelected={spy}
      />,
    );
    await userEvent.click(screen.getByText('Titi'));
    expect(screen.getByText('Toto')).toBeInTheDocument();

    // act(() => {
    //   window.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    // });
    await userEvent.click(document.body);
    expect(screen.queryByText('Toto')).toBeNull();
  });

  test('opens menu when calling openMenu on ref', async () => {
    const ref = createRef<SelectRef>();

    render(
      <Select
        items={['Toto', 'Titi', 'Tata']}
        selected="Titi"
        onSelected={() => {}}
        componentRef={ref}
      />,
    );

    act(() => {
      ref.current?.openMenu();
    });

    await userEvent.click(screen.getByText('Toto'));
  });

  test('renderItem is called', async () => {
    const spy = vitest.fn(function renderItem(item: string) {
      return <div>MY CUSTOM {item}</div>;
    });

    render(
      <Select
        items={['Toto', 'Titi', 'Tata']}
        selected="Titi"
        onSelected={() => {}}
        renderItem={spy}
      />,
    );
    await userEvent.click(screen.getByText('Titi'));

    expect(screen.queryByText('MY CUSTOM Toto')).toBeInTheDocument();
    expect(spy).toBeCalledTimes(3);
  });
});
