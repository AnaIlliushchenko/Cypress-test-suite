/// <reference types="cypress" />

it('working with checkbox component', () => {
cy.visit('https://the-internet.herokuapp.com/');
cy.get('h2').should('have.text', 'Available Examples');
cy.contains('Checkboxes').click();
cy.url().should('include', '/checkboxes');
cy.get('h3').should('have.text', 'Checkboxes');
cy.get('#checkboxes').find('input[type="checkbox"]').first().check();
cy.get('#checkboxes').find('input[type="checkbox"]').last().uncheck();
cy.visit('https://the-internet.herokuapp.com/');
cy.get('h2').should('have.text', 'Available Examples');
})