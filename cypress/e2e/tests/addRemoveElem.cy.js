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

// // Checkboxes
// // cy.visit('https://the-internet.herokuapp.com/');
// // cy.get('h2').should('have.text', 'Available Examples');
// // cy.contains('Checkboxes').click();
// // cy.url().should('include', '/checkboxes');
// // cy.get('h3').should('have.text', 'Checkboxes');
// // cy.get('#checkboxes').find('input[type="checkbox"]').first().check();
// // cy.get('#checkboxes').find('input[type="checkbox"]').last().uncheck();

// // Dropdown
// // cy.visit('https://the-internet.herokuapp.com/');
// // cy.get('h2').should('have.text', 'Available Examples');
// // cy.contains('Dropdown').click();
// // cy.url().should('include', '/dropdown');
// // cy.get('h3').should('have.text', 'Dropdown List');
// // cy.get('select').select('Option 1').should('have.value', '1');
// // cy.get('select#dropdown option:selected').should('have.text', 'Option 1');

// // Form Authentication
// // cy.visit('https://the-internet.herokuapp.com/');
// // cy.get('h2').should('have.text', 'Available Examples');
// // cy.contains('Form Authentication').click();
// // cy.url().should('include', '/login');
// // cy.get('h2').should('have.text', 'Login Page');
// // cy.get('form').within(($form) => {
// //   cy.get('input[name="username"]').type('tomsmith');
// //   cy.get('input[name="password"]').type('SuperSecretPassword!');
// //   cy.root().submit();
// // })
// // cy.url().should('include', '/secure');
// // cy.get('h2').should('have.text', ' Secure Area');
// // cy.get('#flash-messages').should('be.visible');
// // cy.contains('Logout').click();	
// // cy.url().should('include', '/login');

// // Horizontal Slider
// // cy.visit('https://the-internet.herokuapp.com/');
// // cy.get('h2').should('have.text', 'Available Examples');
// // cy.contains('Horizontal Slider').click();
// // cy.url().should('include', '/horizontal_slider');
// // cy.get('h3').should('have.text', 'Horizontal Slider');
// // cy.get('input[type=range]').as('range').invoke('val', 3).trigger('change')
// // cy.get('#range').should('have.text', '3');

// // Hovers
// cy.visit('https://the-internet.herokuapp.com/');
// cy.get('h2').should('have.text', 'Available Examples');
// cy.contains('Hovers').click();
// cy.url().should('include', '/hovers');
// cy.get('h3').should('have.text', 'Hovers');
// cy.get('.figure').first().focus();
// //trigger('mouseover');
// cy.wait(3000);
// cy.get('.figcaption').should('be.visible');
// cy.get('.figcaption').children('h5').should('have.text', 'name: user1');
// // cy.get('.figcaption').children('a').contains('View profile').click();
// // cy.url().should('include', '/users/1');

// // // Inputs
// // cy.visit('https://the-internet.herokuapp.com/');
// // cy.get('h2').should('have.text', 'Available Examples');
// // cy.contains('Inputs').click();
// // cy.url().should('include', '/inputs');
// // cy.get('h3').should('have.text', 'Inputs');
// // cy.get('input[type=number]').type('1');
// // cy.get('input[type=number]').type('33');
// // cy.get('input[type=number]').clear();
// // cy.visit('https://the-internet.herokuapp.com/');
 })

