/// <reference types="cypress" />

it('working with authentication component', () => {
cy.visit('https://the-internet.herokuapp.com/');
cy.get('h2').should('have.text', 'Available Examples');
cy.contains('Form Authentication').click();
cy.url().should('include', '/login');
cy.get('h2').should('have.text', 'Login Page');
cy.get('form').within(($form) => {
  cy.get('input[name="username"]').type('tomsmith');
  cy.get('input[name="password"]').type('SuperSecretPassword!');
  cy.root().submit();
})
cy.url().should('include', '/secure');
cy.get('h2').should('have.text', ' Secure Area');
cy.get('#flash-messages').should('be.visible');
cy.contains('Logout').click();	
cy.url().should('include', '/login');
cy.visit('https://the-internet.herokuapp.com/');
cy.get('h2').should('have.text', 'Available Examples');
})