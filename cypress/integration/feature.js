describe('When landing on the application', () => {
  before(() => {
    cy.visit('/');
  });

  it('should greet the user', () => {
    cy.getByText('Hello world');
  });

  it('should show planet earth', () => {
    cy.getByText('🌏');
  });
});
