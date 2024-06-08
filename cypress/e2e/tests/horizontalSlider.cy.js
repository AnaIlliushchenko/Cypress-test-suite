/// <reference types="cypress" />

it('working with slider component', () => {
cy.visit('https://the-internet.herokuapp.com/');
cy.get('h2').should('have.text', 'Available Examples');
cy.contains('Horizontal Slider').click();
cy.url().should('include', '/horizontal_slider');
cy.get('h3').should('have.text', 'Horizontal Slider');
cy.get('input[type=range]').as('range').invoke('val', 3).trigger('change')
cy.get('#range').should('have.text', '3');
cy.visit('https://the-internet.herokuapp.com/');
cy.get('h2').should('have.text', 'Available Examples');
})