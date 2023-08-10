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