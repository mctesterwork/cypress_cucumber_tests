@regression
Feature: Test main features in https://migueltestingsite.com

    Background: User is located at the app under test

        Given I am at the home page

    Scenario: Make a comment on the hello world post

        When I navigate to comments for hello world post
        And I submit a "test comment 2" with "testauthor" and "miguel@cypress.io"
        Then I should see the awaiting moderation message

    Scenario: Search for a product and add it to the cart

        When I search for a "Just-woke-up Doll"
        And I add product to cart
        And I navigate to cart
        Then I should see the "Just-woke-up Doll" at cart page
    @smoke
    Scenario: Search for a product that doesn't exist
        When I search for a "jdfhodjsf"
        Then I should see message "No products were found matching your selection."

    Examples:
        | comment | name |
        | test comment  | Miguel  |