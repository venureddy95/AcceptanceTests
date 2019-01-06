@donate
  Feature: Make a donation

    Scenario: Donation using card
      Given I am on donate page
      When I pick a donation amount
      And I enter all the mandatory donation fields
      And I choose to pay using Card
      Then I verify the Paysage page is displayed
      When I enter all the mandatory payment details
      And click on Pay now button
      Then I verify the payment successful page displayed to the user