package com.barnardos.pageobjects;
import java.util.*;
import com.barnardos.util.WebConnector;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

public class donatePageObjects extends WebConnector {

    private By cookiesContinueButton = By.xpath("//button[@class='cookie-policy__button']");
    private By singleDonation = By.xpath("//div[@class='donate-block__period']//label[2]");
    private String donationAmountPicker = "//div[@class='donate-block__choice']/label[%s]/span";
    private String fixedDonationAmount = "//div[@class='donate-block__choice']/label[%s]/input";
    private By anyAmount = By.xpath("//div[@class='donate-block__choice']/label[5]/input/span");
    private By donateTodayButton = By.xpath("//div[@class='donate-block__submit']//span");
    private By donationAmount = By.id("don_amount");
    private By title = By.id("pd_title");
    private By firstName = By.id("pd_forename");
    private By lastName = By.id("pd_surname");
    private By emailAddress = By.id("pd_email");
    private By contactNumber = By.id("pd_evephone");
    private By AddressLine1 = By.id("pd_addline1");
    private By AddressLine2 = By.id("pd_addline2");
    private By town = By.id("pd_addtown");
    private By county = By.id("pd_addcounty");
    private By postCode = By.id("pd_addpostcode");
    private By country = By.id("pd_addcountry");
    private By u16Age = By.id("nom_age");
    private By kit_email = By.id("pd_cc_email");
    private By kit_sms = By.id("pd_cc_sms");
    private By kit_post = By.id("pd_cc_post");
    private By kit_phone = By.id("pd_cc_phone");
    private By giftAid = By.id("giftAid_IncomeAgreement");
    private By moreAboutGiftAid = By.partialLinkText("/donate/about-gift-aid");
    private By donateByCard = By.xpath("//input[@value='Donate by card'][@type='submit']");
    private By donateByPayPal = By.xpath("//input[@value='PayPal']");
    private By cardDetailsPage = By.id("nomAccordion");
    private By cardDetailsPageTitle = By.xpath("//h2[@class='nomTitle']");
    private By iFrame = By.xpath("//iframe[@class='sagePayIframe']");
    private By visaDebitCard = By.xpath("//input[@id='1']");
    private By cardNumber = By.xpath("//input[@name='cardnumber']");
    private By securityCode = By.xpath("//input[@name='securitycode']");
    private By cardAddress = By.xpath("//input[@name='cardaddress']");
    private By cardCityTown = By.xpath("//input[@name='cardcity']");
    private By cardPostCode = By.xpath("//input[@name='cardpostcode']");
    private By continueButton = By.xpath("//img[@name='proceed']");
    private By vendorName = By.xpath("//input[@id='field_vendor']");
    private By vendorAmount = By.xpath("//input[@id='field_amount']");
    private By vendorDate = By.xpath("//input[@id='field_date']");
    private By vendorCard = By.xpath("//input[@id='field_pan']");
    private By vendorPassword = By.xpath("//input[@id='field_password']");
    private By vendorSubmit = By.xpath("//input[@id='submit-button']");
    private By successfullPaymentTitle = By.xpath("//h1[@class='hero-text__title']");
    private By successfullPaymentAmount = By.xpath("//p[@class='nomDonationAmount']");

//    input@id=field_vendor, value=barnardos
//    input@id=field_amount, value=5.0 GBP
//    input@id=field_date , value=Fri Jan 04 11:23:55 GMT 2019
//    input@id=field_pan, value=xxxxxxxxxx0006
//    input@id=field_password
//    input@id=submit-button
//    h1@class=hero-text__title, Thank You, Ve
//    p@class=nomDonationAmount, £5.00
//    div@class=nomContent, h5=Thank You, Ve
//    /p=Your donation has been successful and will make an immediate difference.

    public void acceptCookies() {
        scrollDown();
        click(cookiesContinueButton);
    }

    public boolean isDonatePage() {
        return IsElementPresent(singleDonation);
    }

    public String pickDonationAmount(int randomNum) {
        click(singleDonation);
        click(By.xpath(String.format(donationAmountPicker, randomNum)));
        return getValue(By.xpath(String.format(fixedDonationAmount, randomNum)));
    }

    public void clickOnDonateToday(int randomNum) {
        clickByAction(donateTodayButton);
    }

    public boolean IsDonationDetailsPage() {
        return IsElementPresent(donationAmount);
    }

    public String getDonationAmount() {
        return getValue(donationAmount);
    }

//    public String title() {
//
//    }


    public void enterFirstName(String fname) {
        typeText(firstName, fname);
    }

    public void enterLastName(String lname) {
        typeText(lastName, lname);
    }

    public void enterEmail(String email) {
        email = generateString() + email;
        typeText(emailAddress, email);
    }

    public void enterContactNumber(String phone) {
        typeText(contactNumber, phone);
    }

    public void enterAddressLine1(String line1) {
        typeText(AddressLine1, line1);
    }

    public void enterAddressLine2(String line2) {
        typeText(AddressLine2, line2);
    }

    public void enterTown(String Town) {
        typeText(town, Town);
    }

    public void enterCounty(String County) {
        typeText(county, County);
    }

    public void enterPostCode(String postcode) {
        typeText(postCode, postcode);
    }

    public void tickGiftAidCheckbox() {
        tickCheckBox(giftAid);
    }

    public void clickOnDonateByCard() throws Throwable {
        scrollEOP();
        Thread.sleep(1000);
        clickByAction(donateByCard);
    }

    public void clickOnDonateByPaypal() {
        click(donateByPayPal);
    }

    public boolean isCardDetailsPage() {
        return IsElementPresent(cardDetailsPage);
    }

    public String getCardDetailsPageTitle() {
        return getText(cardDetailsPageTitle);
    }

    public void switchToiFrame() {
        scrollDown();
        switchToIframe(iFrame);
    }

    public void switchToDefaultFrame() {
        switchToDafaultframe();
    }

    public void selectVisaDebitCard() {
        clickByAction(visaDebitCard);
    }

    public void enterVisaDebitCardNumber() {
        typeText(cardNumber, "4929000000006");
    }

    public void enterSecurityCode() {
            typeText(securityCode, "123");
    }

    public void clickContinueButton() {
        //clickByAction(continueButton);
        pressEnter(continueButton);
    }

    public void enterSecurityPassword() {
        typeText(vendorPassword, "password");
    }

    public void clickVendorSubmit() {
        pressEnter(vendorSubmit);
    }

    public boolean IsDonationSuccessful() {
        return IsElementPresent(successfullPaymentTitle);
    }

    public String getDonationSuccessfulAmount() {
        return getText(successfullPaymentAmount);
    }
}
