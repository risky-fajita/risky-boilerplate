/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import { ColorSchemeProvider } from '@mantine/core';
import { ColorSchemeToggle } from '.';
import '@testing-library/jest-dom';

describe('<ColorSchemeToggle />', () => {
  let mockToggleColorScheme: jest.Mock;
  beforeEach(() => {
    mockToggleColorScheme = jest.fn();
    render(
      <ColorSchemeProvider colorScheme="light" toggleColorScheme={mockToggleColorScheme}>
        <ColorSchemeToggle />
      </ColorSchemeProvider>
    );
  });

  test('loads the button', async () => {
    //@ts-ignore
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('calls the function when pressed', async () => {
    screen.getByRole('button').click();
    //@ts-ignore
    expect(mockToggleColorScheme).toHaveBeenCalled();
  });
});
