describe('When landing on the application', () => {
  before(() => {
    cy.visit('/');
  });

  it('should greet the user', () => {
    cy.queryByText('Hello world').should('exist');
  });

  it('should show planet earth', () => {
    cy.queryByText('🌏').should('exist');
  });
});
