$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("donate.feature");
formatter.feature({
  "line": 2,
  "name": "Make a donation",
  "description": "",
  "id": "make-a-donation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@donate"
    }
  ]
});
formatter.before({
  "duration": 4522275431,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Paying in my own money with giftaid using card",
  "description": "",
  "id": "make-a-donation;paying-in-my-own-money-with-giftaid-using-card",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@donateSingle"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on donate page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I choose Single donation option",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I pick a donation amount from Single donations",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter all the mandatory donation fields",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose donation type as i am donating my own money with giftaid",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Donate button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify the Paysage page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I click on continue to payment",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter all the mandatory payment details",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on Pay now button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "review the order",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Pay now button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the payment successful page displayed to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "donateStepDefs.i_am_on_donate_page()"
});
formatter.result({
  "duration": 2526316984,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_single_donation_option()"
});
formatter.result({
  "duration": 8133721889,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Single_donations()"
});
formatter.result({
  "duration": 6710706434,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5685428767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "i am donating my own money with giftaid",
      "offset": 26
    }
  ],
  "location": "donateStepDefs.i_choose_donation_type_as(String)"
});
formatter.result({
  "duration": 115964803,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1607335856,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_Paysage_page_is_displayed()"
});
formatter.result({
  "duration": 80794395,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_continue_to_payment()"
});
formatter.result({
  "duration": 3326321902,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_payment_details()"
});
formatter.result({
  "duration": 576617873,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5384415864,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.review_the_order()"
});
formatter.result({
  "duration": 55454365,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5337805191,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_payment_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 81916194,
  "status": "passed"
});
formatter.after({
  "duration": 152975773,
  "status": "passed"
});
formatter.before({
  "duration": 1569163635,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Paying in my own money without giftaid using card",
  "description": "",
  "id": "make-a-donation;paying-in-my-own-money-without-giftaid-using-card",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@donateSingle"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on donate page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I choose Single donation option",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I pick a donation amount from Single donations",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter all the mandatory donation fields",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I choose donation type as i am donating my own money without giftaid",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Donate button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify the Paysage page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I click on continue to payment",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter all the mandatory payment details",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "click on Pay now button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "review the order",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "click on Pay now button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify the payment successful page displayed to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "donateStepDefs.i_am_on_donate_page()"
});
formatter.result({
  "duration": 1971400994,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_single_donation_option()"
});
formatter.result({
  "duration": 8088259981,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Single_donations()"
});
formatter.result({
  "duration": 4692437653,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5838064728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "i am donating my own money without giftaid",
      "offset": 26
    }
  ],
  "location": "donateStepDefs.i_choose_donation_type_as(String)"
});
formatter.result({
  "duration": 59526070,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1583980545,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_Paysage_page_is_displayed()"
});
formatter.result({
  "duration": 57053743,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_continue_to_payment()"
});
formatter.result({
  "duration": 2958148105,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_payment_details()"
});
formatter.result({
  "duration": 563101850,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5385708838,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.review_the_order()"
});
formatter.result({
  "duration": 51467927,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5311295483,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_payment_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 82490346,
  "status": "passed"
});
formatter.after({
  "duration": 126656528,
  "status": "passed"
});
formatter.before({
  "duration": 1365112003,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Paying in money from a fundraising event or collection using card",
  "description": "",
  "id": "make-a-donation;paying-in-money-from-a-fundraising-event-or-collection-using-card",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@donateSingle"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I am on donate page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I choose Single donation option",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I pick a donation amount from Single donations",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter all the mandatory donation fields",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I choose donation type as fundraising event or collection",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on Donate button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I verify the Paysage page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I click on continue to payment",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I enter all the mandatory payment details",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "click on Pay now button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "review the order",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "click on Pay now button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I verify the payment successful page displayed to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "donateStepDefs.i_am_on_donate_page()"
});
formatter.result({
  "duration": 1610128963,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_single_donation_option()"
});
formatter.result({
  "duration": 8083823745,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Single_donations()"
});
formatter.result({
  "duration": 4550891969,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5642412543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fundraising event or collection",
      "offset": 26
    }
  ],
  "location": "donateStepDefs.i_choose_donation_type_as(String)"
});
formatter.result({
  "duration": 1201687704,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1657342883,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_Paysage_page_is_displayed()"
});
formatter.result({
  "duration": 79747649,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_continue_to_payment()"
});
formatter.result({
  "duration": 2890439208,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_payment_details()"
});
formatter.result({
  "duration": 554950027,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5361636191,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.review_the_order()"
});
formatter.result({
  "duration": 49741920,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5288279172,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_payment_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 82477890,
  "status": "passed"
});
formatter.after({
  "duration": 149473843,
  "status": "passed"
});
formatter.before({
  "duration": 1403689663,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Paying in money on behalf of company / school / organisation using card",
  "description": "",
  "id": "make-a-donation;paying-in-money-on-behalf-of-company-/-school-/-organisation-using-card",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@donateSingle"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "I am on donate page",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I choose Single donation option",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I pick a donation amount from Single donations",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I enter all the mandatory donation fields",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I choose donation type as on behalf of company / school / organisation",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I click on Donate button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I verify the Paysage page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "I click on continue to payment",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I enter all the mandatory payment details",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "click on Pay now button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "review the order",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "click on Pay now button",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I verify the payment successful page displayed to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "donateStepDefs.i_am_on_donate_page()"
});
formatter.result({
  "duration": 1815876323,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_single_donation_option()"
});
formatter.result({
  "duration": 8078333736,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Single_donations()"
});
formatter.result({
  "duration": 4711204831,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5645412473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "on behalf of company / school / organisation",
      "offset": 26
    }
  ],
  "location": "donateStepDefs.i_choose_donation_type_as(String)"
});
formatter.result({
  "duration": 701171850,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1499253353,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_Paysage_page_is_displayed()"
});
formatter.result({
  "duration": 214167188,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_continue_to_payment()"
});
formatter.result({
  "duration": 3063190505,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_payment_details()"
});
formatter.result({
  "duration": 562339956,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5332597855,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.review_the_order()"
});
formatter.result({
  "duration": 49663265,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5315523787,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_payment_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 81658725,
  "status": "passed"
});
formatter.after({
  "duration": 147682564,
  "status": "passed"
});
formatter.before({
  "duration": 1329954288,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Donation my own money with giftaid using direct debit",
  "description": "",
  "id": "make-a-donation;donation-my-own-money-with-giftaid-using-direct-debit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@donateMonthly"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "I am on donate page",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I choose Monthly donation option",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I pick a donation amount from Monthly donations",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I enter all direct debit mandatory donation fields",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I choose donation type as i am donating my own money with giftaid",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I click on Donate button",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I verify the direct debit details page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "I enter all the mandatory direct debit details",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I click on setup direct debit button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I verify the bank details confirmation page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "I click on confirm donation button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I verify the DD setup successful page displayed to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "donateStepDefs.i_am_on_donate_page()"
});
formatter.result({
  "duration": 1519573305,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_monthly_donation_option()"
});
formatter.result({
  "duration": 5100921563,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Monthly_donations()"
});
formatter.result({
  "duration": 5943337883,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_direct_debit_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5538642168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "i am donating my own money with giftaid",
      "offset": 26
    }
  ],
  "location": "donateStepDefs.i_choose_donation_type_as(String)"
});
formatter.result({
  "duration": 126271997,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 2015219326,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_direct_debit_details_page_is_displayed()"
});
formatter.result({
  "duration": 104520835,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_direct_debit_details()"
});
formatter.result({
  "duration": 219459447,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_setup_direct_debit_button()"
});
formatter.result({
  "duration": 5388192818,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_bank_details_confirmation_page_is_displayed()"
});
formatter.result({
  "duration": 43141487,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.iClickOnConfirmDonationButton()"
});
formatter.result({
  "duration": 6488318169,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_DD_setup_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 72473403,
  "status": "passed"
});
formatter.after({
  "duration": 168411128,
  "status": "passed"
});
formatter.before({
  "duration": 1345084468,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Donation my own money without giftaid using direct debit",
  "description": "",
  "id": "make-a-donation;donation-my-own-money-without-giftaid-using-direct-debit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 82,
      "name": "@donateMonthly"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "I am on donate page",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "I choose Monthly donation option",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I pick a donation amount from Monthly donations",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I enter all direct debit mandatory donation fields",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I choose donation type as i am donating my own money without giftaid",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I click on Donate button",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I verify the direct debit details page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "I enter all the mandatory direct debit details",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "I click on setup direct debit button",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I verify the bank details confirmation page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "I click on confirm donation button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I verify the DD setup successful page displayed to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "donateStepDefs.i_am_on_donate_page()"
});
formatter.result({
  "duration": 1573139870,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_monthly_donation_option()"
});
formatter.result({
  "duration": 5099396904,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Monthly_donations()"
});
formatter.result({
  "duration": 5764912290,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_direct_debit_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5537398321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "i am donating my own money without giftaid",
      "offset": 26
    }
  ],
  "location": "donateStepDefs.i_choose_donation_type_as(String)"
});
formatter.result({
  "duration": 68575567,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 2237545281,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_direct_debit_details_page_is_displayed()"
});
formatter.result({
  "duration": 110752709,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_direct_debit_details()"
});
formatter.result({
  "duration": 225532984,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_setup_direct_debit_button()"
});
formatter.result({
  "duration": 5309706416,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_bank_details_confirmation_page_is_displayed()"
});
formatter.result({
  "duration": 44819968,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.iClickOnConfirmDonationButton()"
});
formatter.result({
  "duration": 6402946608,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_DD_setup_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 78576147,
  "status": "passed"
});
formatter.after({
  "duration": 152250855,
  "status": "passed"
});
formatter.before({
  "duration": 1369296327,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Donation from a fundraising event or collection using direct debit",
  "description": "",
  "id": "make-a-donation;donation-from-a-fundraising-event-or-collection-using-direct-debit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 97,
      "name": "@donateMonthly"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "I am on donate page",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "I choose Monthly donation option",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "I pick a donation amount from Monthly donations",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I enter all direct debit mandatory donation fields",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I choose donation type as fundraising event or collection",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I click on Donate button",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "I verify the direct debit details page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "I enter all the mandatory direct debit details",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "I click on setup direct debit button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "I verify the bank details confirmation page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "I click on confirm donation button",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I verify the DD setup successful page displayed to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "donateStepDefs.i_am_on_donate_page()"
});
formatter.result({
  "duration": 1525256080,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_monthly_donation_option()"
});
formatter.result({
  "duration": 5101719671,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Monthly_donations()"
});
formatter.result({
  "duration": 5706012888,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_direct_debit_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5496514091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fundraising event or collection",
      "offset": 26
    }
  ],
  "location": "donateStepDefs.i_choose_donation_type_as(String)"
});
formatter.result({
  "duration": 1188155120,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 2010189292,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_direct_debit_details_page_is_displayed()"
});
formatter.result({
  "duration": 92012875,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_direct_debit_details()"
});
formatter.result({
  "duration": 239760632,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_setup_direct_debit_button()"
});
formatter.result({
  "duration": 5257014983,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_bank_details_confirmation_page_is_displayed()"
});
formatter.result({
  "duration": 44467448,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.iClickOnConfirmDonationButton()"
});
formatter.result({
  "duration": 6517679711,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_DD_setup_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 78375660,
  "status": "passed"
});
formatter.after({
  "duration": 146831133,
  "status": "passed"
});
formatter.before({
  "duration": 1461240662,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "Donation on behalf of company / school / organisation using direct debit",
  "description": "",
  "id": "make-a-donation;donation-on-behalf-of-company-/-school-/-organisation-using-direct-debit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 112,
      "name": "@donateMonthly"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "I am on donate page",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "I choose Monthly donation option",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "I pick a donation amount from Monthly donations",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "I enter all direct debit mandatory donation fields",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I choose donation type as on behalf of company / school / organisation",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "I click on Donate button",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "I verify the direct debit details page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 121,
  "name": "I enter all the mandatory direct debit details",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "I click on setup direct debit button",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "I verify the bank details confirmation page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "I click on confirm donation button",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "I verify the DD setup successful page displayed to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "donateStepDefs.i_am_on_donate_page()"
});
formatter.result({
  "duration": 1640411650,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_monthly_donation_option()"
});
formatter.result({
  "duration": 5102466589,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Monthly_donations()"
});
formatter.result({
  "duration": 5719206923,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_direct_debit_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5488167087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "on behalf of company / school / organisation",
      "offset": 26
    }
  ],
  "location": "donateStepDefs.i_choose_donation_type_as(String)"
});
formatter.result({
  "duration": 711620805,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 2024599746,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_direct_debit_details_page_is_displayed()"
});
formatter.result({
  "duration": 97560254,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_direct_debit_details()"
});
formatter.result({
  "duration": 211539734,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_setup_direct_debit_button()"
});
formatter.result({
  "duration": 5265724091,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_bank_details_confirmation_page_is_displayed()"
});
formatter.result({
  "duration": 45581085,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.iClickOnConfirmDonationButton()"
});
formatter.result({
  "duration": 6490377181,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_DD_setup_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 81404442,
  "status": "passed"
});
formatter.after({
  "duration": 164779293,
  "status": "passed"
});
});