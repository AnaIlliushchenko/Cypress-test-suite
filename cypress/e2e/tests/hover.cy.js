import "cypress-real-events";
/// <reference types="cypress" />

it('working with hover component', () => {
cy.visit('https://the-internet.herokuapp.com/');
cy.get('h2').should('have.text', 'Available Examples');
cy.contains('Hovers').click();
cy.url().should('include', '/hovers');
cy.get('h3').should('have.text', 'Hovers');
cy.get('img[alt="User Avatar"]').first().realHover();
cy.get('.figcaption').should('be.visible');
cy.get('.figcaption').find('h5').contains('name: user1');
cy.get('.figcaption').find('a').contains('View profile').click();
cy.url().should('include', '/users/1');
cy.visit('https://the-internet.herokuapp.com/');
cy.get('h2').should('have.text', 'Available Examples');
})