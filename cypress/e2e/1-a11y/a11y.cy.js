/// <reference types="cypress" />

describe('a11y test', () => {
    it('list down all the a11y feedbacks', () => {
        cy.visit('https://example.cypress.io/todo');
        cy.injectAxe();
        cy.checkA11y();
    })

    it('list down all the a11y feedbacks by custom command', () => {
        cy.visit('https://example.cypress.io/todo');
        cy.injectAxe();
        cy.checkAxeViolations();
    })
  })
  