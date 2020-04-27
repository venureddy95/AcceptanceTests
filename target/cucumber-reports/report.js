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
  "duration": 4633839063,
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
  "duration": 3840186568,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_single_donation_option()"
});
formatter.result({
  "duration": 8116237334,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Single_donations()"
});
formatter.result({
  "duration": 7761587998,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5942747963,
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
  "duration": 149838690,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1855299718,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_Paysage_page_is_displayed()"
});
formatter.result({
  "duration": 253945810,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_continue_to_payment()"
});
formatter.result({
  "duration": 3709903327,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_payment_details()"
});
formatter.result({
  "duration": 555387750,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5310006894,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.review_the_order()"
});
formatter.result({
  "duration": 58330644,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5263197666,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_payment_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 104215720,
  "status": "passed"
});
formatter.after({
  "duration": 167288489,
  "status": "passed"
});
formatter.before({
  "duration": 1757357410,
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
  "duration": 1366525639,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_single_donation_option()"
});
formatter.result({
  "duration": 8104292075,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Single_donations()"
});
formatter.result({
  "duration": 4589898758,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5888639946,
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
  "duration": 70749200,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1446431171,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_Paysage_page_is_displayed()"
});
formatter.result({
  "duration": 225927220,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_continue_to_payment()"
});
formatter.result({
  "duration": 2768357359,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_payment_details()"
});
formatter.result({
  "duration": 557257444,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5355022956,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.review_the_order()"
});
formatter.result({
  "duration": 53518717,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5269493220,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_payment_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 89899704,
  "status": "passed"
});
formatter.after({
  "duration": 158054366,
  "status": "passed"
});
formatter.before({
  "duration": 1990899970,
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
  "duration": 1371351986,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_single_donation_option()"
});
formatter.result({
  "duration": 8077180586,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Single_donations()"
});
formatter.result({
  "duration": 4645552563,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5703944281,
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
  "duration": 1202948097,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1756725641,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_Paysage_page_is_displayed()"
});
formatter.result({
  "duration": 76343685,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_continue_to_payment()"
});
formatter.result({
  "duration": 3853197848,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_payment_details()"
});
formatter.result({
  "duration": 583805727,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 6365204841,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.review_the_order()"
});
formatter.result({
  "duration": 55746410,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 6419793436,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_payment_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 88598104,
  "status": "passed"
});
formatter.after({
  "duration": 153401886,
  "status": "passed"
});
formatter.before({
  "duration": 1565230045,
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
  "duration": 1547703828,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_single_donation_option()"
});
formatter.result({
  "duration": 8084948981,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Single_donations()"
});
formatter.result({
  "duration": 4556506902,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5655246639,
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
  "duration": 720574516,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1788602562,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_Paysage_page_is_displayed()"
});
formatter.result({
  "duration": 58586125,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_continue_to_payment()"
});
formatter.result({
  "duration": 3578970030,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_payment_details()"
});
formatter.result({
  "duration": 1104981798,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5651155911,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.review_the_order()"
});
formatter.result({
  "duration": 52429903,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5238922009,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_payment_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 94510509,
  "status": "passed"
});
formatter.after({
  "duration": 174088185,
  "status": "passed"
});
formatter.before({
  "duration": 1606121400,
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
  "duration": 1331504605,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_monthly_donation_option()"
});
formatter.result({
  "duration": 5102991263,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Monthly_donations()"
});
formatter.result({
  "duration": 5726394612,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_direct_debit_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5570316908,
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
  "duration": 123247927,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1939367064,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_direct_debit_details_page_is_displayed()"
});
formatter.result({
  "duration": 128349108,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_direct_debit_details()"
});
formatter.result({
  "duration": 245821568,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_setup_direct_debit_button()"
});
formatter.result({
  "duration": 5340004807,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_bank_details_confirmation_page_is_displayed()"
});
formatter.result({
  "duration": 49564475,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.iClickOnConfirmDonationButton()"
});
formatter.result({
  "duration": 6361476136,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_DD_setup_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 91517075,
  "status": "passed"
});
formatter.after({
  "duration": 180677768,
  "status": "passed"
});
formatter.before({
  "duration": 1614992613,
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
  "duration": 1932109777,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_monthly_donation_option()"
});
formatter.result({
  "duration": 5104130958,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Monthly_donations()"
});
formatter.result({
  "duration": 5880817863,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_direct_debit_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5552813151,
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
  "duration": 77631483,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 3401469668,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_direct_debit_details_page_is_displayed()"
});
formatter.result({
  "duration": 122125830,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_direct_debit_details()"
});
formatter.result({
  "duration": 270316364,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_setup_direct_debit_button()"
});
formatter.result({
  "duration": 5420344367,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_bank_details_confirmation_page_is_displayed()"
});
formatter.result({
  "duration": 49335350,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.iClickOnConfirmDonationButton()"
});
formatter.result({
  "duration": 6953955152,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_DD_setup_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 91698653,
  "status": "passed"
});
formatter.after({
  "duration": 176964566,
  "status": "passed"
});
formatter.before({
  "duration": 1474483607,
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
  "duration": 4011676631,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_monthly_donation_option()"
});
formatter.result({
  "duration": 5102759316,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Monthly_donations()"
});
formatter.result({
  "duration": 6007881655,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_direct_debit_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5511600141,
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
  "duration": 1202856215,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1930971269,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_direct_debit_details_page_is_displayed()"
});
formatter.result({
  "duration": 104179440,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_direct_debit_details()"
});
formatter.result({
  "duration": 229457673,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_setup_direct_debit_button()"
});
formatter.result({
  "duration": 5281633192,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_bank_details_confirmation_page_is_displayed()"
});
formatter.result({
  "duration": 49769226,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.iClickOnConfirmDonationButton()"
});
formatter.result({
  "duration": 6371174806,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_DD_setup_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 86426426,
  "status": "passed"
});
formatter.after({
  "duration": 139224923,
  "status": "passed"
});
formatter.before({
  "duration": 1600678840,
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
  "duration": 1274796527,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_monthly_donation_option()"
});
formatter.result({
  "duration": 5100665308,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Monthly_donations()"
});
formatter.result({
  "duration": 5820097118,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_direct_debit_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5544143593,
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
  "duration": 729419103,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1882684605,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_direct_debit_details_page_is_displayed()"
});
formatter.result({
  "duration": 114011785,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_direct_debit_details()"
});
formatter.result({
  "duration": 244238906,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_setup_direct_debit_button()"
});
formatter.result({
  "duration": 5298176559,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_bank_details_confirmation_page_is_displayed()"
});
formatter.result({
  "duration": 48292285,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.iClickOnConfirmDonationButton()"
});
formatter.result({
  "duration": 6339777938,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_DD_setup_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 87162374,
  "status": "passed"
});
formatter.after({
  "duration": 153583713,
  "status": "passed"
});
});