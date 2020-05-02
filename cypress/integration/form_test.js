describe('Test our Form Input', function() {
    this.beforeEach(function() {
        cy.visit('http://localhost:3000/pizza')
    })

    it('Check if Form is working', function() {
        // Check in Size
        cy.get('select')
        .select('small')
        .should('have.value', '1');
        // Check in Email
        cy.get('[data-cy="email"]')
        .type('email@email.com')
        .should("have.value", "email@email.com");
        // Check the password
        cy.get('[data-cy="password"]')
        .type('Password')
        .should('have.value', 'Password');
        // Check the check box
        cy.get('[type="checkbox"]')
        .check().should('be.checked');
        //check submit button
        cy.contains('Submit')
        .click();
    })
})