/// <reference types="cypress" />

it('working with input component', () => {
  cy.visit('https://the-internet.herokuapp.com/');
  cy.get('h2').should('have.text', 'Available Examples');
  cy.contains('Inputs').click();
  cy.url().should('include', '/inputs');
  cy.get('h3').should('have.text', 'Inputs');
  cy.get('input[type=number]').type('1');
  cy.get('input[type=number]').type('33');
  cy.get('input[type=number]').clear();
  cy.visit('https://the-internet.herokuapp.com/');
  cy.get('h2').should('have.text', 'Available Examples');
})
