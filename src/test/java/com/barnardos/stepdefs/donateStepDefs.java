//package com.barnardos.stepdefs;
//import com.barnardos.pageobjects.donatePageObjects;
//import cucumber.api.Scenario;
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import org.apache.commons.io.FileUtils;
//import org.junit.Assert;
//import org.openqa.selenium.OutputType;
//import org.openqa.selenium.TakesScreenshot;
//
//import java.io.File;
//import java.text.SimpleDateFormat;
//import java.util.Calendar;
//import java.util.Random;
//
//public class donateStepDefs {
//
//    private donatePageObjects donatePO= new donatePageObjects();
//    private static String url = "https://barnardos:believe@donate.barnardos.org.uk/";
//    private Scenario scenario;
//    public String exp_DonationAmount;
//
//    @Before
//    public void runBeforeScenario(Scenario scenario) {
//        this.scenario = scenario;
//        donatePO.openBrowser("chrome");
//    }
//
//    @Given("^I am on donate page$")
//    public void i_am_on_donate_page() {
//        donatePO.navigate(url);
//        donatePO.acceptCookies();
//        Assert.assertTrue("Donate page not loaded, Plz check: ", donatePO.isDonatePage());
//    }
//
//    @When("^I pick a donation amount$")
//    public void i_pick_a_donation_amount() throws Throwable {
//        Random rand = new Random();
//        int max = 4, min = 1;
//        int randomNum = rand.nextInt((max - min) + 1) + min;
//        Thread.sleep(1000);
//        exp_DonationAmount = donatePO.pickDonationAmount(randomNum);
//        donatePO.clickOnDonateToday(randomNum);
//    }
//
//    @When("^I enter all the mandatory donation fields$")
//    public void i_enter_all_the_mandatory_donation_fields() throws Throwable {
//        Assert.assertTrue("Donation details page not loaded, Plz check: ", donatePO.IsDonationDetailsPage());
//        Assert.assertTrue("Donation amount in the details page is not as expected, Plz check: ", donatePO.getDonationAmount().contains(exp_DonationAmount));
//        donatePO.navigate(donatePO.getCurrentURL() + "&ref=DEESONTEST&testMode=true");
//        donatePO.enterFirstName("Venu");
//        donatePO.enterLastName("Reddy");
//        donatePO.enterEmail("venu.reddy@example.com");
//        donatePO.enterContactNumber("07919191919");
//        donatePO.enterAddressLine1("88");
//        donatePO.enterAddressLine2("Tavistock Square");
//        donatePO.enterTown("London");
//        donatePO.enterCounty("London");
//        donatePO.enterPostCode("412");
//        donatePO.tickGiftAidCheckbox();
//    }
//
//    @When("^I choose to pay using Card$")
//    public void i_choose_to_pay_using_Card() throws Throwable {
//        donatePO.clickOnDonateByCard();
//        Thread.sleep(5000);
//    }
//
//    @Then("^I verify the Paysage page is displayed$")
//    public void i_verify_the_Paysage_page_is_displayed() throws Throwable {
//        Assert.assertTrue("Card details page is not loaded, Plz check: ", donatePO.isCardDetailsPage());
//        Assert.assertEquals("Card details", donatePO.getCardDetailsPageTitle());
//        donatePO.switchToiFrame();
//        Thread.sleep(2000);
//    }
//
//    @When("^I enter all the mandatory payment details$")
//    public void i_enter_all_the_mandatory_payment_details() throws Throwable {
//        donatePO.selectVisaDebitCard();
//        donatePO.enterVisaDebitCardNumber();
//        donatePO.enterSecurityCode();
//
//    }
//
//    @When("^click on Pay now button$")
//    public void click_on_Pay_now_button() throws Throwable {
//        donatePO.clickContinueButton();
//        Thread.sleep(10000);
//        donatePO.enterSecurityPassword();
//        donatePO.clickVendorSubmit();
//        Thread.sleep(15000);
//    }
//
//    @Then("^I verify the payment successful page displayed to the user$")
//    public void i_verify_the_payment_successful_page_displayed_to_the_user() throws Throwable {
//        donatePO.switchToDefaultFrame();
//        Assert.assertTrue("Successful Donation page not loaded, Plz check: ", donatePO.IsDonationSuccessful());
//        Assert.assertTrue("Successful Donation amount is not as expected, Plz check: ", donatePO.getDonationSuccessfulAmount().contains(exp_DonationAmount));
//    }
//
//    @After
//    public void runAfterScenario() {
//        if (scenario.isFailed()) {
//            try{
//                // To create reference of TakesScreenshot
//                TakesScreenshot screenshot=(TakesScreenshot)donatePO.driver;
//                // Call method to capture screenshot
//                File src=screenshot.getScreenshotAs(OutputType.FILE);
//                //Get time stamp
//                String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
//                // Copy files to specific location
//                FileUtils.copyFile(src, new File("src/test/resources/screenshots/"+"Failure_"+timeStamp+".png"));
//                System.out.println("Successfully captured a screenshot");
//            }catch (Exception e){
//                System.out.println("Exception while taking screenshot "+e.getMessage());
//            }
//        }
//        donatePO.quit();
//    }
//}
package com.barnardos.stepdefs;
import com.barnardos.pageobjects.donatePageObjects;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Random;

public class donateStepDefs {

    private donatePageObjects donatePO= new donatePageObjects();
    //private static String url = "https://barnardos:believe@www.barnardos.org.uk/";
    //private static String url = "https://barnardos:believe@staging.barnardos.org.uk/";
    //private static String url = "https://barnardos:believe@donate.barnardos.org.uk/";
    private static String url = "https://donationapp:forward-ache-vexation-oodles@barnardos-donate-staging.herokuapp.com/";
    //private static String url = "https://barnardos:believe@staging.barnardos.org.uk/case-studies/testing-crns";
    private Scenario scenario;
    public String exp_DonationAmount;
    public String singlemonthlyRow;

    @Before
    public void runBeforeScenario(Scenario scenario) {
        this.scenario = scenario;
        //donatePO.openBrowser("firefox");
        donatePO.openBrowser("chrome");
    }

    @Given("^I am on Barnardos home page$")
    public void i_am_on_Barnardos_home_page() throws Throwable {
        donatePO.navigate(url);
        donatePO.acceptCookies();
        Assert.assertTrue("Barnardos landing page not loaded, Plz check: ", donatePO.isDonateButtonInMenu());
        Assert.assertEquals("Donate", donatePO.getDonateButtonInMenu());
    }

    @When("^I click on Donate from header$")
    public void i_click_on_Donate_from_header() throws Throwable {
        donatePO.clickDonateButtonInMenu();
    }

    @Then("^I land on Donate multisite$")
    public void i_land_on_Donate_multisite() throws Throwable {
        donatePO.acceptCookies();
        donatePO.scroll();
        Assert.assertTrue("Donate page not loaded, Plz check: ", donatePO.isDonatePage());
    }

    @Given("^I am on donate page$")
    public void i_am_on_donate_page() {
        donatePO.navigate(url);
        donatePO.acceptCookies();
        donatePO.scroll();
        Assert.assertTrue("Donate page not loaded, Plz check: ", donatePO.isDonatePage());
    }

    @When("^I choose Single donation option$")
    public void i_choose_single_donation_option() throws Throwable {
        Thread.sleep(5000);
        //donatePO.chooseSingleDonationOption();
        donatePO.chooseaDonationOption("Single");
        Thread.sleep(3000);
    }

    @When("^I choose Monthly donation option$")
    public void i_choose_monthly_donation_option() throws Throwable {
        Thread.sleep(5000);
        //donatePO.chooseMonthlyDonationOption();
        donatePO.chooseaDonationOption("Monthly");
    }

//    @When("^I choose \"([^\"]*)\" donation option$")
//    public void i_choose_donation_option(String options) throws Throwable {
//        Thread.sleep(5000);
//        donatePO.chooseaDonationOption(options);
//        Thread.sleep(3000);
//    }

    @When("^I pick a donation amount from Single donations$")
    public void i_pick_a_donation_amount_from_Single_donations() throws Throwable {
        Random rand = new Random();
        int max = 4, min = 1;
        int randomNum = rand.nextInt(max) + min;
        Thread.sleep(1000);
        singlemonthlyRow = "2";
        exp_DonationAmount = donatePO.pickDonationAmount(singlemonthlyRow, randomNum);
        Thread.sleep(3000);
        donatePO.clickOnDonateToday(randomNum);
    }

    @When("^I pick a donation amount from Monthly donations$")
    public void i_pick_a_donation_amount_from_Monthly_donations() throws Throwable {
        Random rand = new Random();
        int max = 4, min = 1;
        int randomNum = rand.nextInt(max) + min;
        Thread.sleep(1000);
        singlemonthlyRow = "1";
        exp_DonationAmount = donatePO.pickDonationAmount(singlemonthlyRow, randomNum);
        Thread.sleep(3000);
        donatePO.clickOnDonateToday(randomNum);
    }

    @When("^I enter all the mandatory donation fields$")
    public void i_enter_all_the_mandatory_donation_fields() throws Throwable {
        Assert.assertTrue("Donation details page not loaded, Plz check: ", donatePO.IsDonationDetailsPage());
        //Assert.assertTrue("Donation amount in the details page is not as expected, Plz check: ", donatePO.getDonationAmount().contains(exp_DonationAmount.replace("£", " ")));
        donatePO.navigate(donatePO.getCurrentURL() + "&ref=DEESONTEST&testMode=true");
        donatePO.enterFirstName("Testing");
        donatePO.enterLastName("Tester");
        donatePO.enterEmail("venu.reddy@example.com");
        donatePO.enterContactNumber("07919191919");
        donatePO.enterAddressLine1("88");
        donatePO.enterAddressLine2("Tavistock Square");
        donatePO.enterTown("London");
        donatePO.enterCounty("London");
        donatePO.enterPostCode("412");
        donatePO.tickGiftAidCheckbox();
    }

    @When("^I enter all direct debit mandatory donation fields$")
    public void i_enter_all_direct_debit_mandatory_donation_fields() throws Throwable {
        Assert.assertTrue("Donation details page not loaded, Plz check: ", donatePO.IsDonationDetailsPage());
        Assert.assertTrue("Donation amount in the details page is not as expected, Plz check: ", donatePO.getDonationAmount().contains(exp_DonationAmount.replace("£", " ")));
        donatePO.navigate(donatePO.getCurrentURL() + "&ref=DEESONTEST&testMode=true");
        donatePO.selectTitle();
        donatePO.enterFirstName("Testing");
        donatePO.enterLastName("Tester");
        donatePO.enterEmail("Tester.Testing@example.com");
        donatePO.enterContactNumber("07919191919");
        donatePO.selectPromotedQuestion();
        donatePO.enterAddressLine1("88");
        donatePO.enterAddressLine2("Tavistock Square");
        donatePO.enterTown("London");
        donatePO.enterCounty("London");
        donatePO.enterPostCode("412");
        donatePO.tickGiftAidCheckbox();
    }

    @When("^I choose to pay using Card$")
    public void i_choose_to_pay_using_Card() throws Throwable {
        donatePO.clickOnDonateByCard();
        Thread.sleep(5000);
    }

    @When("^I click on confirm donation button$")
    public void i_click_on_confirm_donation_button() throws Throwable {
        donatePO.clickOnConfirmDonationButton();
        Thread.sleep(5000);
    }

    @Then("^I verify the Paysage page is displayed$")
    public void i_verify_the_Paysage_page_is_displayed() throws Throwable {
        Assert.assertTrue("Card details page is not loaded, Plz check: ", donatePO.isCardDetailsPage());
        Assert.assertEquals("Card details", donatePO.getCardDetailsPageTitle());
        donatePO.switchToiFrame();
        Thread.sleep(5000);
    }

    @Then("^I verify the direct debit details page is displayed$")
    public void i_verify_the_direct_debit_details_page_is_displayed() throws Throwable {
        Assert.assertTrue("Direct debit details page is not loaded, Plz check: ", donatePO.isCardDetailsPage());
        Assert.assertEquals("Bank details", donatePO.getCardDetailsPageTitle());
        Thread.sleep(3000);

    }

    @When("^I enter all the mandatory payment details$")
    public void i_enter_all_the_mandatory_payment_details() throws Throwable {
        //donatePO.selectVisaDebitCard();
        donatePO.enterVisaDebitCardNumber();
        donatePO.enterSecurityCode();
    }

    @When("^I enter all the mandatory direct debit details$")
    public void i_enter_all_the_mandatory_direct_debit_details() throws Throwable {
        donatePO.enterAccountHolderName("Tester testing");
        donatePO.enterAccountSortCode("40-47-84");
        donatePO.enterAccountNumber("70872490");
    }

    @When("^click on Pay now button$")
    public void click_on_Pay_now_button() throws Throwable {
        donatePO.clickContinueButton();
        Thread.sleep(10000);
        donatePO.enterSecurityPassword();
        donatePO.clickVendorSubmit();
        Thread.sleep(15000);
    }

    @Then("^I verify the payment successful page displayed to the user$")
    public void i_verify_the_payment_successful_page_displayed_to_the_user() throws Throwable {
        donatePO.switchToDefaultFrame();
        Assert.assertTrue("Successful Donation page not loaded, Plz check: ", donatePO.IsDonationSuccessful());
        Assert.assertTrue("Successful Donation message is not as expected, Plz check: ", donatePO.getDonationSuccessfulMsg().contains("Thank You,"));
        Assert.assertTrue("Successful Donation amount is not as expected, Plz check: ", donatePO.getDonationSuccessfulAmount().contains(exp_DonationAmount));
    }

    @Then("^I verify the bank details confirmation page is displayed$")
    public void i_verify_the_bank_details_confirmation_page_is_displayed() throws Throwable {
        Assert.assertTrue("Bank details - Confirmation page is not loaded, Plz check: ", donatePO.isCardDetailsPage());
        Assert.assertEquals("Bank details - Confirmation", donatePO.getCardDetailsPageTitle());
        Thread.sleep(3000);
    }

    @Then("^I verify the DD setup successful page displayed to the user$")
    public void i_verify_the_DD_setup_successful_page_displayed_to_the_user() throws Throwable {
        Assert.assertTrue("Successful Donation page not loaded, Plz check: ", donatePO.IsDonationSuccessful());
        Assert.assertTrue("Successful Donation message is not as expected, Plz check: ", donatePO.getDonationSuccessfulMsg().contains("Thank You,"));
    }

    @After
    public void runAfterScenario() {
        if (scenario.isFailed()) {
            try{
                // To create reference of TakesScreenshot
                TakesScreenshot screenshot=(TakesScreenshot)donatePO.driver;
                // Call method to capture screenshot
                File src=screenshot.getScreenshotAs(OutputType.FILE);
                //Get time stamp
                String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
                // Copy files to specific location
                FileUtils.copyFile(src, new File("src/test/resources/screenshots/"+"Failure_"+timeStamp+".png"));
                System.out.println("Successfully captured a screenshot");
            }catch (Exception e){
                System.out.println("Exception while taking screenshot "+e.getMessage());
            }
        }
        donatePO.quit();
    }
}
