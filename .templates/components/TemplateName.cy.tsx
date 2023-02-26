/* eslint-disable jest/expect-expect */
import React from 'react';
import { TemplateName } from '.';

describe('<TemplateName />', () => {
  beforeEach(() => {
    cy.mount(<TemplateName text={'text'} />);
  });

  it('renders', () => {
    cy.get('TemplateName').should('exist');
  });
});
