/* eslint-disable jest/expect-expect */
import { globalConfig } from '../../components/globalConfig';
import { cypressConfig } from '../cypressConfig';

describe('Navigation', () => {
  cypressConfig.viewPorts.forEach((viewPort) => {
    context(viewPort, () => {
      beforeEach(() => {
        //@ts-ignore
        cy.viewport(viewPort);
        cy.visit('http://localhost:3000');
      });

      it('renders the headers', () => {
        cy.get('[data-cy="app-header"]').should('exist');
        cy.get('[data-cy="app-header"]').should('have.text', globalConfig.appName);
      });

      it('renders the menu button', () => {
        cy.get('#menu-button').should('exist');
        cy.get('#navigation-sidebar').should('not.exist');
        cy.log('Opening the menu');
        cy.get('#menu-button').click();
        cy.get('#navigation-sidebar').should('be.visible');
      });

      it('follows the correct links to the right pages', () => {
        cy.log('Opening the menu');
        cy.get('#menu-button').click();
        cy.get('#navigation-sidebar').should('be.visible');
        globalConfig.routes.forEach((route) => {
          cy.log(`Navigating to ${route.label}`);
          cy.get(`[href="${route.path}"]`).click();
          cy.url().should('include', route.path);
        });
      });
    });
  });
});
