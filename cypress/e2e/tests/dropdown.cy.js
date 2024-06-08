/// <reference types="cypress" />

it('working with dropdown component', () => {
  cy.visit('https://the-internet.herokuapp.com/');
  cy.get('h2').should('have.text', 'Available Examples');
  cy.contains('Dropdown').click();
  cy.url().should('include', '/dropdown');
  cy.get('h3').should('have.text', 'Dropdown List');
  cy.get('select').select('Option 1').should('have.value', '1');
  cy.get('select#dropdown option:selected').should('have.text', 'Option 1');
  cy.visit('https://the-internet.herokuapp.com/');
  cy.get('h2').should('have.text', 'Available Examples');
})