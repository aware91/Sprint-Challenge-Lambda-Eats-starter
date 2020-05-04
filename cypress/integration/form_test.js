describe('Test our Form Input', function() {
    this.beforeEach(function() {
        cy.visit('http://localhost:3000/pizza')
    })

    it('Check if Form is working', function() {
        // Check in Name
        cy.get('[data-cy="name"]')
        .type('Anthony')
        .should("have.value", "Anthony");
        // check Size
        cy.get('[data-cy="size"]')
        .select('small')
        .should('have.value', 'small')
        // check sauce
        cy.get('[type="radio"]')
        .first().check()
        // Check the check box
        cy.get('[type="checkbox"]')
        .check().should('be.checked');
        // check instructions
        cy.get('textarea')
        .type('Little cheese')
        .should('have.value', 'Little cheese')
        // check Quantity
        cy.get('[data-cy="quantity"]')
        .select('1')
        .should('have.value', '1')
        //check submit button
        cy.contains('Add to Order')
        .click();
    })
})