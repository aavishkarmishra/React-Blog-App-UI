/// <reference types="cypress" />

describe('Blog App Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Home Page Tests', () => {
    cy.get('.top').children().should('have.length', 3);
    cy.get('.header .headerTitles');
    cy.get('.header img');
    cy.get('.home .posts');
    cy.get('.home .sidebar');
  });
  it('Write Page Tests', () => {
    cy.get('.topCenter .topListItem').last().click();
    cy.location('pathname').should('match', /\/write$/);
    cy.get('.top').children().should('have.length', 3);
    cy.get('.writeForm .writeInput');
    cy.get('.writeForm textarea');
    cy.get('.writeForm button');
  });
  it('Login Page Tests', () => {
    cy.get('.topRight .topListItem').first().click();
    cy.location('pathname').should('match', /\/login$/);
    cy.get('.loginForm .loginInput').should('have.length', 2);
    cy.get('.loginForm button.loginButton');
    cy.get('.loginRegisterButton');
  });
  it('Register Page Tests', () => {
    cy.get('.topRight .topListItem').last().click();
    cy.location('pathname').should('match', /\/register$/);
    cy.get('.registerLoginButton');
    cy.get('.registerForm .registerInput').should('have.length', 3);
    cy.get('.registerForm button.registerButton');
  });
  it('Single Post Page Tests', () => {
    cy.visit('http://localhost:3000/post/abc');
    cy.get('.sidebar .sidebarItem').should('have.length', 3);
    cy.get('.singlePost .singlePostImg');
    cy.get('.singlePost .singlePostTitle');
    cy.get('.singlePost .singlePostInfo');
    cy.get('.singlePost .singlePostDesc');
  });
});
