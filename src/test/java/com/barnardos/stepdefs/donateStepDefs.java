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
    private static String url = "https://barnardos:believe@donate.barnardos.org.uk/";
    private Scenario scenario;
    public String exp_DonationAmount;

    @Before
    public void runBeforeScenario(Scenario scenario) {
        this.scenario = scenario;
        donatePO.openBrowser("chrome");
    }

    @Given("^I am on donate page$")
    public void i_am_on_donate_page() {
        donatePO.navigate(url);
        donatePO.acceptCookies();
        Assert.assertTrue("Donate page not loaded, Plz check: ", donatePO.isDonatePage());
    }

    @When("^I pick a donation amount$")
    public void i_pick_a_donation_amount() throws Throwable {
        Random rand = new Random();
        int max = 4, min = 1;
        int randomNum = rand.nextInt((max - min) + 1) + min;
        Thread.sleep(1000);
        exp_DonationAmount = donatePO.pickDonationAmount(randomNum);
        donatePO.clickOnDonateToday(randomNum);
    }

    @When("^I enter all the mandatory donation fields$")
    public void i_enter_all_the_mandatory_donation_fields() throws Throwable {
        Assert.assertTrue("Donation details page not loaded, Plz check: ", donatePO.IsDonationDetailsPage());
        Assert.assertTrue("Donation amount in the details page is not as expected, Plz check: ", donatePO.getDonationAmount().contains(exp_DonationAmount));
        donatePO.navigate(donatePO.getCurrentURL() + "&ref=DEESONTEST&testMode=true");
        donatePO.enterFirstName("Venu");
        donatePO.enterLastName("Reddy");
        donatePO.enterEmail("venu.reddy@example.com");
        donatePO.enterContactNumber("07919191919");
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

    @Then("^I verify the Paysage page is displayed$")
    public void i_verify_the_Paysage_page_is_displayed() throws Throwable {
        Assert.assertTrue("Card details page is not loaded, Plz check: ", donatePO.isCardDetailsPage());
        Assert.assertEquals("Card details", donatePO.getCardDetailsPageTitle());
        donatePO.switchToiFrame();
        Thread.sleep(2000);
    }

    @When("^I enter all the mandatory payment details$")
    public void i_enter_all_the_mandatory_payment_details() throws Throwable {
        donatePO.selectVisaDebitCard();
        donatePO.enterVisaDebitCardNumber();
        donatePO.enterSecurityCode();

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
        Assert.assertTrue("Successful Donation amount is not as expected, Plz check: ", donatePO.getDonationSuccessfulAmount().contains(exp_DonationAmount));
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
