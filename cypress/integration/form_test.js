describe('Test our Form Input', function() {
    this.beforeEach(function() {
        cy.visit('http://localhost:3000/pizza')
    })

    it('Check if Form is working', function() {
        // Check in Name
        cy.get('[data-cy="name"]')
        .type('Anthony')
        .should("have.value", "Anthony");
        // check sauce
        cy.get('[type="radio"]')
        .first().check()
        // Check the check box
        cy.get('[type="checkbox"]')
        .check().should('be.checked');
        //check submit button
        cy.contains('Add to Order')
        .click();
    })
})