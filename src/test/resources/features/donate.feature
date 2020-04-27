@donate
  Feature: Make a donation
    @donateSingle
    Scenario: Paying in my own money with giftaid using card
      Given I am on donate page
      When I choose Single donation option
      And I pick a donation amount from Single donations
      And I enter all the mandatory donation fields
      And I choose donation type as i am donating my own money with giftaid
      And I click on Donate button
      Then I verify the Paysage page is displayed
      When I click on continue to payment
      And I enter all the mandatory payment details
      And click on Pay now button
      And review the order
      And click on Pay now button
      Then I verify the payment successful page displayed to the user

    @donateSingle
    Scenario: Paying in my own money without giftaid using card
      Given I am on donate page
      When I choose Single donation option
      And I pick a donation amount from Single donations
      And I enter all the mandatory donation fields
      And I choose donation type as i am donating my own money without giftaid
      And I click on Donate button
      Then I verify the Paysage page is displayed
      When I click on continue to payment
      And I enter all the mandatory payment details
      And click on Pay now button
      And review the order
      And click on Pay now button
      Then I verify the payment successful page displayed to the user

    @donateSingle
    Scenario: Paying in money from a fundraising event or collection using card
      Given I am on donate page
      When I choose Single donation option
      And I pick a donation amount from Single donations
      And I enter all the mandatory donation fields
      And I choose donation type as fundraising event or collection
      And I click on Donate button
      Then I verify the Paysage page is displayed
      When I click on continue to payment
      And I enter all the mandatory payment details
      And click on Pay now button
      And review the order
      And click on Pay now button
      Then I verify the payment successful page displayed to the user

    @donateSingle
    Scenario: Paying in money on behalf of company / school / organisation using card
      Given I am on donate page
      When I choose Single donation option
      And I pick a donation amount from Single donations
      And I enter all the mandatory donation fields
      And I choose donation type as on behalf of company / school / organisation
      And I click on Donate button
      Then I verify the Paysage page is displayed
      When I click on continue to payment
      And I enter all the mandatory payment details
      And click on Pay now button
      And review the order
      And click on Pay now button
      Then I verify the payment successful page displayed to the user

    @donateMonthly
    Scenario: Donation my own money with giftaid using direct debit
      Given I am on donate page
      When I choose Monthly donation option
      And I pick a donation amount from Monthly donations
      And I enter all direct debit mandatory donation fields
      And I choose donation type as i am donating my own money with giftaid
      And I click on Donate button
      Then I verify the direct debit details page is displayed
      When I enter all the mandatory direct debit details
      And I click on setup direct debit button
      Then I verify the bank details confirmation page is displayed
      And I click on confirm donation button
      Then I verify the DD setup successful page displayed to the user

    @donateMonthly
    Scenario: Donation my own money without giftaid using direct debit
      Given I am on donate page
      When I choose Monthly donation option
      And I pick a donation amount from Monthly donations
      And I enter all direct debit mandatory donation fields
      And I choose donation type as i am donating my own money without giftaid
      And I click on Donate button
      Then I verify the direct debit details page is displayed
      When I enter all the mandatory direct debit details
      And I click on setup direct debit button
      Then I verify the bank details confirmation page is displayed
      And I click on confirm donation button
      Then I verify the DD setup successful page displayed to the user

    @donateMonthly
    Scenario: Donation from a fundraising event or collection using direct debit
      Given I am on donate page
      When I choose Monthly donation option
      And I pick a donation amount from Monthly donations
      And I enter all direct debit mandatory donation fields
      And I choose donation type as fundraising event or collection
      And I click on Donate button
      Then I verify the direct debit details page is displayed
      When I enter all the mandatory direct debit details
      And I click on setup direct debit button
      Then I verify the bank details confirmation page is displayed
      And I click on confirm donation button
      Then I verify the DD setup successful page displayed to the user

    @donateMonthly
    Scenario: Donation on behalf of company / school / organisation using direct debit
      Given I am on donate page
      When I choose Monthly donation option
      And I pick a donation amount from Monthly donations
      And I enter all direct debit mandatory donation fields
      And I choose donation type as on behalf of company / school / organisation
      And I click on Donate button
      Then I verify the direct debit details page is displayed
      When I enter all the mandatory direct debit details
      And I click on setup direct debit button
      Then I verify the bank details confirmation page is displayed
      And I click on confirm donation button
      Then I verify the DD setup successful page displayed to the user