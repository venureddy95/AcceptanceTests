@donate
  Feature: Make a donation
    @donateSingle
    Scenario: Donation using card
      Given I am on donate page
      When I choose Single donation option
      And I pick a donation amount from Single donations
      And I enter all the mandatory donation fields
      And I choose to pay using Card
      Then I verify the Paysage page is displayed
      When I enter all the mandatory payment details
      And click on Pay now button
      Then I verify the payment successful page displayed to the user

#    @donateMonthly
#    Scenario: Donation using direct debit
#      Given I am on donate page
#      When I choose Monthly donation option
#      And I pick a donation amount from Monthly donations
#      And I enter all direct debit mandatory donation fields
#      And I click on confirm donation button
#      Then I verify the direct debit details page is displayed
#      When I enter all the mandatory direct debit details
#      And I click on confirm donation button
#      Then I verify the bank details confirmation page is displayed
#      And I click on confirm donation button
#      Then I verify the DD setup successful page displayed to the user

#    @Single
#    Scenario: Donation using card
#      Given I am on Barnardos home page
#      When I click on Donate from header
#      Then I land on Donate multisite
#      When I choose Single donation option
#      And I pick a donation amount from Single donations
#      And I enter all the mandatory donation fields
#      And I choose to pay using Card
#      Then I verify the Paysage page is displayed
#      When I enter all the mandatory payment details
#      And click on Pay now button
#      Then I verify the payment successful page displayed to the user