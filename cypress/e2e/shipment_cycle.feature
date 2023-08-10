@regression
Feature: Test main features in https://migueltestingsite.com

    Background: User is located at the app under test
    
        Given I am at the home page
    
    Scenario: Make a comment on the hello world post
        
        When I navigate to comments for hello world post
        And I submit a "<comment>" with "<name>" and "<email>"

Examples:
    | name | email | comment |
    | Mike  | miguel@cypress.com | This comment was made via cypress automated script  |
        