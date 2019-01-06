@facebook
Feature: facebook test

Scenario: facebook login
    Given I am on facebook login page
    And I enter username "venu9595@yahoo.com"
    And I enter password "Barnardos"
    When I click on submit button
    Then I logged in
