import {When, Then, Given} from "@badeball/cypress-cucumber-preprocessor";

Given("I am at the home page", () => {
    cy.visit("https://migueltestingsite.com/");
});

When("I navigate to comments for hello world post", ()=> {
    cy.get("a[href*='hello-world#comments']")
        .click({force: true})
});

When("I submit a {string} with {string} and {string}", (comment, name, email) => {
    cy.get("textarea[id='comment']")
        .scrollIntoView()
        .click()
        .type(`${comment}`)
    cy.get("input[id='author'")
        .click()
        .type(`${name}`)
    cy.get("input[id='email'")
        .click()
        .type(`${email}`)
    cy.get("input[name='submit'")
        .click()
});

When("I search for a {string}", (product) =>{
    cy.get("input[id='woocommerce-product-search-field-0']")
        .click({force: true})
        .type(`${product}{enter}`)
});

When("I add product to cart", () =>{
    cy.get("button[name='add-to-cart']")
        .click()
});

When("I navigate to cart", () =>{
    cy.get("a[href='https://migueltestingsite.com/cart']")
        .first()
        .click()
});

Then("I should see the awaiting moderation message", () =>{
    cy.get('.comment-awaiting-moderation')
        .should('be.visible')
});

Then("I should see message {string}", (message) => {
    cy.contains(`${message}`)
        .should('be.visible')
});

Then("I should see the {string} at cart page", (product) =>{
    cy.get("a").contains(`${product}`, { matchCase: false })
});