/* eslint-disable jest/expect-expect */
import { ColorSchemeProvider } from '@mantine/core';
import React from 'react';
import { ColorSchemeToggle } from '.';

describe('<ColorSchemeToggle />', () => {
  beforeEach(() => {
    cy.mount(
      <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
        <ColorSchemeToggle />
      </ColorSchemeProvider>
    );
  });

  it('renders', () => {
    cy.get('button').should('exist');
  });
});
