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
  "duration": 3492429593,
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
    },
    {
      "line": 3,
      "name": "@Billboard"
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
  "duration": 1814012982,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_single_donation_option()"
});
formatter.result({
  "duration": 8120231849,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Single_donations()"
});
formatter.result({
  "duration": 4541647220,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5788479636,
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
  "duration": 150461840,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1606597147,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_Paysage_page_is_displayed()"
});
formatter.result({
  "duration": 69584565,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_continue_to_payment()"
});
formatter.result({
  "duration": 2719621813,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_payment_details()"
});
formatter.result({
  "duration": 531069449,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5294371756,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.review_the_order()"
});
formatter.result({
  "duration": 65096275,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5291282574,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_payment_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 91275051,
  "status": "passed"
});
formatter.after({
  "duration": 208239673,
  "status": "passed"
});
formatter.before({
  "duration": 1537832801,
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
  "duration": 1519716991,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_single_donation_option()"
});
formatter.result({
  "duration": 8084255538,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Single_donations()"
});
formatter.result({
  "duration": 4577292303,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5747883618,
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
  "duration": 82766123,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1379159391,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_Paysage_page_is_displayed()"
});
formatter.result({
  "duration": 240324705,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_continue_to_payment()"
});
formatter.result({
  "duration": 2675607136,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_payment_details()"
});
formatter.result({
  "duration": 521344529,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5308655401,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.review_the_order()"
});
formatter.result({
  "duration": 54797372,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5294578657,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_payment_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 104329189,
  "status": "passed"
});
formatter.after({
  "duration": 207754747,
  "status": "passed"
});
formatter.before({
  "duration": 1420363327,
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
  "duration": 1247386710,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_single_donation_option()"
});
formatter.result({
  "duration": 8101470801,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Single_donations()"
});
formatter.result({
  "duration": 4560212246,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5750407466,
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
  "duration": 1218857247,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1611449473,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_Paysage_page_is_displayed()"
});
formatter.result({
  "duration": 54070893,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_continue_to_payment()"
});
formatter.result({
  "duration": 2632392320,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_payment_details()"
});
formatter.result({
  "duration": 509919861,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5310330026,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.review_the_order()"
});
formatter.result({
  "duration": 71168995,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5268458882,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_payment_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 91275852,
  "status": "passed"
});
formatter.after({
  "duration": 177137818,
  "status": "passed"
});
formatter.before({
  "duration": 1431259293,
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
  "duration": 1485183465,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_single_donation_option()"
});
formatter.result({
  "duration": 8070465639,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Single_donations()"
});
formatter.result({
  "duration": 4586233373,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5696240953,
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
  "duration": 744255615,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1761671888,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_Paysage_page_is_displayed()"
});
formatter.result({
  "duration": 71184048,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_continue_to_payment()"
});
formatter.result({
  "duration": 2805083694,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_payment_details()"
});
formatter.result({
  "duration": 525493592,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5283566529,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.review_the_order()"
});
formatter.result({
  "duration": 66108022,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.click_on_Pay_now_button()"
});
formatter.result({
  "duration": 5294899926,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_payment_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 94958770,
  "status": "passed"
});
formatter.after({
  "duration": 148207157,
  "status": "passed"
});
formatter.before({
  "duration": 1388007618,
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
    },
    {
      "line": 67,
      "name": "@Billboard"
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
  "duration": 1332865547,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_monthly_donation_option()"
});
formatter.result({
  "duration": 5105895533,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Monthly_donations()"
});
formatter.result({
  "duration": 5766975816,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_direct_debit_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5671566473,
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
  "duration": 170980960,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1941601997,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_direct_debit_details_page_is_displayed()"
});
formatter.result({
  "duration": 112739932,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_direct_debit_details()"
});
formatter.result({
  "duration": 243189927,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_setup_direct_debit_button()"
});
formatter.result({
  "duration": 5388824951,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_bank_details_confirmation_page_is_displayed()"
});
formatter.result({
  "duration": 53805463,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.iClickOnConfirmDonationButton()"
});
formatter.result({
  "duration": 6539667311,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_DD_setup_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 108062532,
  "status": "passed"
});
formatter.after({
  "duration": 160196348,
  "status": "passed"
});
formatter.before({
  "duration": 1474599225,
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
  "duration": 1434374396,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_monthly_donation_option()"
});
formatter.result({
  "duration": 5118883678,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Monthly_donations()"
});
formatter.result({
  "duration": 5750493815,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_direct_debit_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5652232586,
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
  "duration": 84676089,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1999878816,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_direct_debit_details_page_is_displayed()"
});
formatter.result({
  "duration": 109775744,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_direct_debit_details()"
});
formatter.result({
  "duration": 265906783,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_setup_direct_debit_button()"
});
formatter.result({
  "duration": 5275798493,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_bank_details_confirmation_page_is_displayed()"
});
formatter.result({
  "duration": 50592207,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.iClickOnConfirmDonationButton()"
});
formatter.result({
  "duration": 6245812083,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_DD_setup_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 93481043,
  "status": "passed"
});
formatter.after({
  "duration": 154810215,
  "status": "passed"
});
formatter.before({
  "duration": 1279359650,
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
  "duration": 1171638733,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_monthly_donation_option()"
});
formatter.result({
  "duration": 5110756416,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Monthly_donations()"
});
formatter.result({
  "duration": 5706413013,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_direct_debit_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5690270500,
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
  "duration": 1214284205,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1875206143,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_direct_debit_details_page_is_displayed()"
});
formatter.result({
  "duration": 110940115,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_direct_debit_details()"
});
formatter.result({
  "duration": 246785828,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_setup_direct_debit_button()"
});
formatter.result({
  "duration": 5364837328,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_bank_details_confirmation_page_is_displayed()"
});
formatter.result({
  "duration": 52392335,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.iClickOnConfirmDonationButton()"
});
formatter.result({
  "duration": 6289654381,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_DD_setup_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 101272815,
  "status": "passed"
});
formatter.after({
  "duration": 197478607,
  "status": "passed"
});
formatter.before({
  "duration": 1349471410,
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
      "name": "@donateMonthly_release1.2"
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
  "duration": 1285438095,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_choose_monthly_donation_option()"
});
formatter.result({
  "duration": 5122302901,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_pick_a_donation_amount_from_Monthly_donations()"
});
formatter.result({
  "duration": 5705158414,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_direct_debit_mandatory_donation_fields()"
});
formatter.result({
  "duration": 5572990194,
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
  "duration": 761774250,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_Donate_button()"
});
formatter.result({
  "duration": 1865107121,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_direct_debit_details_page_is_displayed()"
});
formatter.result({
  "duration": 92924637,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_enter_all_the_mandatory_direct_debit_details()"
});
formatter.result({
  "duration": 253365984,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_click_on_setup_direct_debit_button()"
});
formatter.result({
  "duration": 5430638434,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_bank_details_confirmation_page_is_displayed()"
});
formatter.result({
  "duration": 55482422,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.iClickOnConfirmDonationButton()"
});
formatter.result({
  "duration": 6598365046,
  "status": "passed"
});
formatter.match({
  "location": "donateStepDefs.i_verify_the_DD_setup_successful_page_displayed_to_the_user()"
});
formatter.result({
  "duration": 92088383,
  "status": "passed"
});
formatter.after({
  "duration": 163791760,
  "status": "passed"
});
});