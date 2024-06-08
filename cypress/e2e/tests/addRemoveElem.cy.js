/// <reference types="cypress" />

it('working with adding/removing events', () => {
  cy.visit('https://the-internet.herokuapp.com/');
  cy.get('h2').should('have.text', 'Available Examples');
  cy.contains('Add/Remove Elements').click();
  cy.url().should('include', '/add_remove_elements');
  cy.get('h3').should('have.text', 'Add/Remove Elements');
  cy.contains('Add Element').click();	
  cy.get('.added-manually').should('be.visible');
  cy.contains('Delete').click();	
  cy.get('.added-manually').should('not.exist');
  cy.visit('https://the-internet.herokuapp.com/');
  cy.get('h2').should('have.text', 'Available Examples');
 })

