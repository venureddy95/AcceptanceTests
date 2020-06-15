package com.barnardos.pageobjects;
import com.barnardos.util.WebConnector;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.Arrays;
import java.util.Random;
import java.util.List;

public class donatePageObjects extends WebConnector {

    private By cookiesContinueButton = By.xpath("//div[@class='cookie-policy__body']/button");
    private By donateButtonInMenu = By.xpath("//div[@id='main-menu']/a/span");
    private By singleDonation = By.xpath("//div[contains(@class, 'donate-block__period')]//label[@class='donate-block__period--last-label']");
    private By monthlyDonation = By.xpath("//div[contains(@class, 'donate-block__period')]//label[@class='donate-block__period--first-label']");
    private String donationAmountPicker = "//div[@class='donate-block__choice js-donate-block__choice']/fieldset[%s]//label[%s]/span";
    private String fixedDonationAmount = "//div[@class='donate-block__choice js-donate-block__choice']/fieldset[%s]//label[%s]/input";
    private By anyAmount = By.xpath("//div[@class='donate-block__choice-wrap']/label[5]/input/span");
    private By donateTodayButton = By.xpath("//div[contains(@class, 'donate-block__submit')]//span");
    private By donationAmount = By.id("donation_amount");
    private By title = By.id("donation_title");
    private By firstName = By.id("donation_first_name");
    private By lastName = By.id("donation_last_name");
    private By emailAddress = By.id("donation_email_address");
    private By contactNumber = By.id("donation_phone_number");
    private String promptedQuestion = ("//label[contains(.,'%s')]");
    private By AddressLine1 = By.id("donation_address_line_1");
    private By AddressLine2 = By.id("donation_address_line_2");
    private By town = By.id("donation_town");
    private By postCode = By.id("donation_postcode");
    private By country = By.id("donation_mailing_country");
    private By u16Age = By.id("donation_under_16");
    private By kit_email = By.id("donation_email_consent");
    private By kit_sms = By.id("donation_sms_consent");
    private By kit_post = By.id("donation_mail_consent");
    private By kit_phone = By.id("donation_phone_consent");
    private By donatingMyOwnMoney = By.id("donation_type_own_money");
    private By donatingFromFundraisingEventOrCollection = By.id("donation_type_event");
    private By informationAboutTheFundraisingEvent = By.id("event_information");
    private By donatingOnBehalfOfOrganisation = By.id("donation_type_organisation");
    private By organisationName = By.id("organisation_name");
    private By organisationAddress1 = By.id("organisation_address_1");
    private By organisationAddress2 = By.id("organisation_address_2");
    private By organisationTown = By.id("organisation_town");
    private By organisationCounty = By.id("organisation_county");
    private By organisationPostcode = By.id("organisation_postcode");
    private By organisationCountry = By.id("donation_organisation_country");

    private By giftAid = By.id("donation_gift_aid_status");
    private By moreAboutGiftAid = By.partialLinkText("/donate/about-gift-aid");
    private By donateButton = By.xpath("//input[@value='Donate']");
    private By confirmDonation = By.xpath("//input[@value='Confirm donation'][@type='submit']");
    private By donateByPayPal = By.xpath("//input[@value='PayPal']");
    private By cardDetailsPage = By.xpath("//h1");
    private By cardDetailsPageTitle = By.xpath("//h1");
    private By continueToPayment = By.xpath("//input[@value='Continue to payment'][@type='submit']");
    private By visaDebitCard = By.xpath("//span[contains(.,'Visa')]");
    private By cardNumber = By.id("form-card_details.field-pan");
    private By expiryMonth = By.id("form-card_details.field-expiry_mm");
    private By expiryYear = By.id("form-card_details.field-expiry_yy");
    private By securityCode = By.id("form-card_details.field-cvc");
    private By confirmCardDetailsButton = By.xpath("//button[@name='action'][@value='proceed']");
    private By reviewPaymentTitle = By.xpath("//h1[@class='page__title']");
    private By successfulPaymentTitle = By.xpath("//h1[@class='Title']");
    private By successfulPaymentAmount = By.xpath("//h2");
    private By accountHolderName = By.id("accountName");


//Monthly Payments:
    private By monthly = By.id("donation_frequency_monthly");
    private By yearly = By.id("donation_frequency_yearly");
    private By collectionDay03 = By.id("donation_day_03");
    private By collectionDay05 = By.id("donation_day_05");
    private By collectionDay08 = By.id("donation_day_08");
    private By directDebitPage = By.xpath("//div[@class='payment-details__name']");
    private By directDebitPage1 = By.xpath("//div[@class='payment-details__description u-text-center']");
    private By accountSortCode = By.id("customer_bank_accounts_branch_code");
    private By accountNumber = By.id("customer_bank_accounts_account_number");
    private By setupDDbutton = By.id("submit-button-text");
    private By submitButton = By.id("submit-button");

    public void acceptCookies() {
        //scrollDown();
        if (IsElementPresent(cookiesContinueButton))
        {
            click(cookiesContinueButton);
        }
    }

    public void scroll() {
        scrollDown();
    }

    public boolean isDonateButtonInMenu() {
        return IsElementPresent(donateButtonInMenu);
    }

    public String getDonateButtonInMenu() {
        return getText(donateButtonInMenu);
    }

    public void clickDonateButtonInMenu() {
        click(donateButtonInMenu);
    }

    public boolean isDonatePage() {
        return IsElementPresent(singleDonation);
    }

//    public void chooseMonthlyDonationOption() {
//        if ( !IsElementSelected(monthlyDonation) )
//        {
//            clickByAction(monthlyDonation);
//        }
//    }
//
//    public void chooseSingleDonationOption() {
//        if ( !IsElementSelected(singleDonation) )
//        {
//            clickByAction(singleDonation);
//        }
//    }

    public void chooseaDonationOption(String option) {
        if (option == "Single" & !IsElementSelected(singleDonation)) {clickByAction(singleDonation);}
        else if (option == "Monthly" & !IsElementSelected(monthlyDonation) ) {clickByAction(monthlyDonation);}
    }

    public String pickDonationAmount(String singleMonthly, int randomNum) {
        clickByAction(By.xpath(String.format(donationAmountPicker, singleMonthly, randomNum)));
        return getValue(By.xpath(String.format(fixedDonationAmount, singleMonthly, randomNum)));
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

    public void enterTitle(String t) {
        typeText(title, t);
    }

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

    public void selectPromotedQuestion() {
        //"Spoke to a fundraiser" has been replaced by "Billboard"
        List<String> promotedQ = Arrays.asList("Leaflet or insert",  "Letter", "Other", "Billboard",
                "Online advert", "News story", "Social media", "TV advert", "Radio");
        Random random = new Random();
        clickByAction(By.xpath(String.format(promptedQuestion, promotedQ.get(random.nextInt(promotedQ.size())))));
        //clickByAction(By.xpath(String.format(promptedQuestion, "Billboard")));
    }

    public void selectKITemail() {
        clickByAction(kit_email);
    }

    public void selectKITphone() {
        clickByAction(kit_phone);
    }

    public void selectKITpost() {
        clickByAction(kit_post);
    }

    public void selectKITsms() {
        clickByAction(kit_sms);
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

    public void enterPostCode(String postcode) {
        typeText(postCode, postcode);
    }

    public void pressTabOut() {
        pressTabOut(postCode);
    }

    public void tickDonatingMyOwnMoneyOption() {
        clickByAction(donatingMyOwnMoney);
    }

    public void tickGiftAidCheckbox() {
        clickByAction(giftAid);
    }

    public void tickDonatingFromFundraisingEventOrCollectionOption() {
        clickByAction(donatingFromFundraisingEventOrCollection);
    }

    public void enterInformationAboutTheFundraisingEvent(String info) {
        typeText(informationAboutTheFundraisingEvent, info);
    }

    public void tickDonatingOnBehalfOfOrganisationOption() {
        clickByAction(donatingOnBehalfOfOrganisation);
    }

    public void enterOrganisationName(String orgName) {
        typeText(organisationName, orgName);
    }

    public void enterOrganisationAddress1(String address1) {
        typeText(organisationAddress1, address1);
    }

    public void enterOrganisationAddress2(String address2) {
        typeText(organisationAddress2, address2);
    }

    public void enterOrganisationTown(String town) {
        typeText(organisationTown, town);
    }

    public void enterOrganisationCounty(String county) {
        typeText(organisationCounty, county);
    }

    public void enterOrganisationPostcode(String postcode) {
        typeText(organisationPostcode, postcode);
    }

    public void selectOrganisationCountry(String country) {
        Select drpCountry = new Select((WebElement) organisationCountry);
        drpCountry.selectByVisibleText("country");
    }

    public void clickOnDonateButton() throws Throwable {
        scrollEOP();
        Thread.sleep(1000);
        clickByAction(donateButton);
    }

    public void clickOnDonateByPaypal() {
        click(donateByPayPal);
    }

    public void clickOnConfirmDonationButton() throws Throwable {
        scrollEOP();
        Thread.sleep(1000);
        clickByAction(confirmDonation);
    }

    public void clickOnContinueToPaymentButton() throws Throwable {
        focusOnWindow();
        Thread.sleep(1000);
        scrollEOP();
        Thread.sleep(1000);
        clickByAction(continueToPayment);
    }

    public boolean isCardDetailsPage() {
        return IsElementPresent(cardDetailsPage);
    }

    public String getCardDetailsPageTitle() {
        return getText(cardDetailsPageTitle);
    }

    public void enterAccountHolderName(String accountName) {
        typeText(accountHolderName, accountName);
    }

    public void enterAccountSortCode(String sortCode) {
        typeText(accountSortCode, sortCode);
    }

    public void enterAccountNumber(String accNumber) {
        typeText(accountNumber, accNumber);
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

    public void enterExpiryMonth() {
        typeText(expiryMonth, "01");
    }

    public void enterExpiryYear() {
        typeText(expiryYear, "25");
    }

    public void enterSecurityCode() {
        typeText(securityCode, "123");
    }

    public void clickConfirmCardDetailsButton() {
        //clickByAction(continueButton);
        clickByAction(confirmCardDetailsButton);
    }

    public boolean IsDonationReview() {
        return IsElementPresent(reviewPaymentTitle);
    }

    public String getDonationReviewTitle() {
        return getText(reviewPaymentTitle);
    }

    public boolean IsDonationSuccessful() {
        return IsElementPresent(successfulPaymentTitle);
    }

    public String getDonationSuccessfulMsg() {
        return getText(successfulPaymentTitle);
    }

    public String getDonationSuccessfulAmount() {
        return getText(successfulPaymentAmount);
    }

    public void focusOnWindow() {
        driver.switchTo().defaultContent();
    }

    public void selectMonthlyOption() {
        clickByAction(monthly);
    }

    public void selectYearlyOption() {
        clickByAction(yearly);
    }

    public void selectCollectionDay03Option() {
        clickByAction(collectionDay03);
    }

    public void selectCollectionDay05Option() {
        clickByAction(collectionDay05);
    }

    public void selectCollectionDay08Option() {
        clickByAction(collectionDay08);
    }

    public String getDirectDebitPageTitle() {
        return getText(directDebitPage);
    }

    public String getDirectDebitPageTitle1() {
        return getText(directDebitPage1);
    }

    public void clickOnSetupDDbutton() {
        clickByAction(setupDDbutton);
    }

    public void clickOnSubmitButton() {
        clickByAction(submitButton);
    }

//    public void getWhatPromptedYouToGiveTodayOptionsPicker() {
//        Random random = new Random();
//        List<WebElement> elements = driver.findElements((promptedQuestionList));
//        System.out.println("Number of elements:" +elements.size());
//        //String number = String.valueOf(random.nextInt(elements.size()));
//        //clickByAction(By.xpath(String.format(promptedQuestion, number)));
//        clickByAction(By.xpath(String.format(promptedQuestion, random.nextInt(elements.size()))));
//        //return (String.format(promptedQuestion, number));
//    }


}
