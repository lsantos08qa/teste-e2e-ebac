Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('detalhes', (firstName, lastName, País, street, city, Estado ,zipCode ,number, email) => {
    cy.get('#billing_first_name').type(faker.person.firstName())
    cy.get('#billing_last_name').type(faker.person.lastName())
    cy.get('#select2-billing_country-container').should('have.text', País)
    cy.get('#billing_address_1').clear().type(faker.location.street())
    cy.get('#billing_city').clear().type(faker.location.city())
    cy.get('#select2-billing_state-container').should('have.text', Estado)    
    cy.get('#billing_postcode').clear().type(faker.location.zipCode())
    cy.get('#billing_phone').clear().type(faker.number())
    cy.get('#billing_email').clear().type('aluno_ebac@teste.com')
    cy.get('#terms').click()
    cy.get('#place_order').click()
})

Cypress.Commands.add('concluirPedido', () => {
    cy.get('.woocommerce-message > .button').click();
    cy.get('.checkout-button').click();
    cy.get('#terms').click();
    cy.get('#place_order').click(); 
});

