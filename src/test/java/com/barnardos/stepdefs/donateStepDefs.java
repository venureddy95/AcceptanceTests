package com.barnardos.stepdefs;
import com.barnardos.pageobjects.donatePageObjects;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
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
    //private static String url = "https://barnardos:believe@staging.barnardos.org.uk/";
    private static String url = "https://donationapp:forward-ache-vexation-oodles@barnardos-donate-staging.herokuapp.com/";
    private Scenario scenario;
    public String exp_DonationAmount;
    public String singleMonthlyRow;

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
        //donatePO.acceptCookies();
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
        donatePO.chooseaDonationOption("Monthly");
    }

    @When("^I pick a donation amount from Single donations$")
    public void i_pick_a_donation_amount_from_Single_donations() throws Throwable {
        Random rand = new Random();
        int max = 4, min = 1;
        int randomNum = rand.nextInt(max) + min;
        Thread.sleep(1000);
        singleMonthlyRow = "2";
        exp_DonationAmount = donatePO.pickDonationAmount(singleMonthlyRow, randomNum);
        Thread.sleep(3000);
        donatePO.clickOnDonateToday(randomNum);
    }

    @When("^I pick a donation amount from Monthly donations$")
    public void i_pick_a_donation_amount_from_Monthly_donations() throws Throwable {
        Random rand = new Random();
        int max = 4, min = 1;
        int randomNum = rand.nextInt(max) + min;
        singleMonthlyRow = "1";
        exp_DonationAmount = donatePO.pickDonationAmount(singleMonthlyRow, randomNum);
        donatePO.clickOnDonateToday(randomNum);
        Thread.sleep(5000);
    }

    @When("^I enter all the mandatory donation fields$")
    public void i_enter_all_the_mandatory_donation_fields() throws Throwable {
        Assert.assertTrue("Donation details page not loaded, Plz check: ", donatePO.IsDonationDetailsPage());
        Assert.assertTrue("Donation type message in the details page is not as expected, Plz check: ", donatePO.getDonationSuccessfulMsg().contains("Make a one off donation"));
        Assert.assertTrue("Donation amount in the details page is not as expected, Plz check: ", donatePO.getDonationAmount().contains(exp_DonationAmount.replace("£", " ")));
        donatePO.enterTitle("Mr");
        Thread.sleep(1000);
        donatePO.enterFirstName("Testing");
        donatePO.enterLastName("Single");
        donatePO.enterEmail("Single.Testing@example.com");
        donatePO.enterContactNumber("07919191919");
        donatePO.enterAddressLine1("88");
        donatePO.enterAddressLine2("Tavistock Square");
        donatePO.enterTown("London");
        donatePO.enterPostCode("WD412LL");
        donatePO.selectPromotedQuestion();
        donatePO.selectKITemail();
        donatePO.selectKITphone();
        Thread.sleep(3000);
    }

    @When("^I enter all direct debit mandatory donation fields$")
    public void i_enter_all_direct_debit_mandatory_donation_fields() throws Throwable {
        Assert.assertTrue("Donation details page not loaded, Plz check: ", donatePO.IsDonationDetailsPage());
        Assert.assertTrue("Donation type message in the details page is not as expected, Plz check: ", donatePO.getDonationSuccessfulMsg().contains("Make a regular donation"));
        Assert.assertTrue("Donation amount in the details page is not as expected, Plz check: ", donatePO.getDonationAmount().contains(exp_DonationAmount.replace("£", " ")));
        donatePO.selectMonthlyOption();
        donatePO.selectCollectionDay03Option();
        donatePO.enterTitle("Mr");
        Thread.sleep(1000);
        donatePO.enterFirstName("Testing");
        donatePO.enterLastName("Monthly");
        donatePO.enterEmail("Monthly.Testing@example.com");
        donatePO.enterContactNumber("07919191919");
        donatePO.enterAddressLine1("88");
        donatePO.enterAddressLine2("Tavistock Square");
        donatePO.enterTown("London");
        donatePO.enterPostCode("WD412LL");
        donatePO.selectPromotedQuestion();
        donatePO.selectKITemail();
        Thread.sleep(3000);
    }

    @When("^I choose donation type as (.*)$")
    public void i_choose_donation_type_as(@org.jetbrains.annotations.NotNull String dType) throws Throwable {
        if(dType.contains("with giftaid")) {
            donatePO.tickDonatingMyOwnMoneyOption();
            donatePO.tickGiftAidCheckbox();
        }
        else if (dType.contains("without giftaid")) {
            donatePO.tickDonatingMyOwnMoneyOption();
        }
        else if (dType.contains("fundraising")){
            donatePO.tickDonatingFromFundraisingEventOrCollectionOption();
            Thread.sleep(1000);
            donatePO.enterInformationAboutTheFundraisingEvent("Venu marathon event");
        }
        else if (dType.contains("company")) {
            donatePO.tickDonatingOnBehalfOfOrganisationOption();
            donatePO.enterOrganisationName("CR");
            donatePO.enterOrganisationAddress1("CR line 1");
            donatePO.enterOrganisationAddress2("CR line 2");
            donatePO.enterOrganisationTown("CR town");
            donatePO.enterOrganisationCounty("CR county");
            donatePO.enterOrganisationPostcode("CR postcode");
        }
        else {
            donatePO.tickDonatingMyOwnMoneyOption();
            donatePO.tickGiftAidCheckbox();
        }

    }

    @When("^I click on Donate button$")
    public void i_click_on_Donate_button() throws Throwable {
        donatePO.clickOnDonateButton();
    }

    @Then("^I verify the Paysage page is displayed$")
    public void i_verify_the_Paysage_page_is_displayed() throws Throwable {
        Assert.assertTrue("Card details page is not loaded, Plz check: ", donatePO.isCardDetailsPage());
        //Assert.assertEquals("Ready to donate a single payment of £50.00?", donatePO.getCardDetailsPageTitle());
        Assert.assertTrue("Donation confirmation message is not as expected, Plz check: ", donatePO.getCardDetailsPageTitle().contains("Ready to donate a single payment of £"));
        //donatePO.switchToiFrame();
        //Thread.sleep(5000);
    }

    @When("^I click on continue to payment$")
    public void i_click_on_continue_to_payment() throws Throwable {
        donatePO.clickOnContinueToPaymentButton();
    }

    @Then("^I verify the direct debit details page is displayed$")
    public void i_verify_the_direct_debit_details_page_is_displayed() throws Throwable {
        Assert.assertTrue("Direct debit details page is not loaded, Plz check: ", donatePO.isCardDetailsPage());
        Assert.assertTrue("Donation confirmation message is not as expected, Plz check: ", donatePO.getDirectDebitPageTitle().contains("Set up a Direct Debit with Barnardo's"));
        Assert.assertTrue("Donation confirmation message is not as expected, Plz check: ", donatePO.getDirectDebitPageTitle1().contains("Regular donation to Barnardo's"));
    }

    @When("^I enter all the mandatory payment details$")
    public void i_enter_all_the_mandatory_payment_details() throws Throwable {
        donatePO.focusOnWindow();
        donatePO.selectVisaDebitCard();
        donatePO.enterVisaDebitCardNumber();
        donatePO.enterExpiryMonth();
        donatePO.enterExpiryYear();
        donatePO.enterSecurityCode();
    }

    @When("^I enter all the mandatory direct debit details$")
    public void i_enter_all_the_mandatory_direct_debit_details() throws Throwable {
        //donatePO.enterAccountHolderName("Tester testing");
        donatePO.enterAccountSortCode("40-47-84");
        donatePO.enterAccountNumber("70872490");
    }

    @When("^I click on setup direct debit button$")
    public void i_click_on_setup_direct_debit_button() throws Throwable {
        donatePO.clickOnSetupDDbutton();
        Thread.sleep(5000);
    }

    @Then("^review the order$")
    public void review_the_order() throws Throwable {
        Assert.assertTrue("Successful Donation page not loaded, Plz check: ", donatePO.IsDonationReview());
        Assert.assertTrue("Successful Donation message is not as expected, Plz check: ", donatePO.getDonationReviewTitle().contains("Review your order"));
    }

    @When("^click on Pay now button$")
    public void click_on_Pay_now_button() throws Throwable {
        donatePO.clickConfirmCardDetailsButton();
        Thread.sleep(5000);
    }

    @Then("^I verify the payment successful page displayed to the user$")
    public void i_verify_the_payment_successful_page_displayed_to_the_user() throws Throwable {
        //donatePO.switchToDefaultFrame();
        Assert.assertTrue("Successful Donation page not loaded, Plz check: ", donatePO.IsDonationSuccessful());
        Assert.assertTrue("Successful Donation message is not as expected, Plz check: ", donatePO.getDonationSuccessfulMsg().contains("Thank you!"));
        Assert.assertTrue("Successful Donation amount is not as expected, Plz check: ", donatePO.getDonationSuccessfulAmount().contains("Your donation has been successful"));
    }

    @Then("^I verify the bank details confirmation page is displayed$")
    public void i_verify_the_bank_details_confirmation_page_is_displayed() throws Throwable {
        Assert.assertTrue("Bank details - Confirmation page is not loaded, Plz check: ", donatePO.isCardDetailsPage());
        Assert.assertEquals("Barnardo's", donatePO.getCardDetailsPageTitle());
        //Thread.sleep(3000);
    }

    @And("^I click on confirm donation button$")
    public void iClickOnConfirmDonationButton() throws Throwable {
        donatePO.clickOnSubmitButton();
        Thread.sleep(5000);
    }

    @Then("^I verify the DD setup successful page displayed to the user$")
    public void i_verify_the_DD_setup_successful_page_displayed_to_the_user() throws Throwable {
        Assert.assertTrue("Successful Donation page not loaded, Plz check: ", donatePO.IsDonationSuccessful());
        Assert.assertTrue("Successful Donation message is not as expected, Plz check: ", donatePO.getDonationSuccessfulMsg().contains("Thank you!"));
        Assert.assertTrue("Successful Donation amount is not as expected, Plz check: ", donatePO.getDonationSuccessfulAmount().contains("We have set up your Direct Debit"));
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
