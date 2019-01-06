package com.barnardos.util;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.util.UUID;

import org.openqa.selenium.interactions.Actions;

import java.util.concurrent.TimeUnit;

public class WebConnector {

    public static WebDriver driver;

    public void openBrowser(String browser) {
        switch (browser) {
            case "chrome":
                System.setProperty("webdriver.chrome.driver","src/test/resources/drivers/chromedriver_v2.44");
                driver = new ChromeDriver();
                break;
            case "firefox":
                System.setProperty("webdriver.gecko.driver","src/test/resources/drivers/geckodriver_v0.23.0");
                driver = new FirefoxDriver();
                break;
            default:
                String errorMessage = String.format("browser %s not set", browser);
                throw new RuntimeException(errorMessage);
        }
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    }

    public static String generateString() {
        String uuid = UUID.randomUUID().toString().replaceAll("-", "");
        return uuid;
    }

    public void navigate(String url) {
        driver.navigate().to(url);
    }

    public String getCurrentURL() {
        return driver.getCurrentUrl();
    }

    public void scrollDown() {
        ((JavascriptExecutor)driver).executeScript("scroll(0,500)");
    }

    public void scrollEOP() {
        ((JavascriptExecutor)driver).executeScript("window.scrollTo(0, document.body.scrollHeight)");
    }

    protected void typeText(By element, String value){
        driver.findElement(element).sendKeys(value);
    }

    protected void clickByAction(By element){
        Actions actions = new Actions(driver);
        actions.moveToElement(driver.findElement(element)).click().build().perform();
    }

    protected void click(By element) {
        //driver.findElement(element).click();
        clickByAction (element);
    }

    protected String getValue(By element) {
        return driver.findElement(element).getAttribute("value");
    }

    protected String getText(By element) {
        return driver.findElement(element).getText();
    }

    protected boolean IsElementPresent(By element) {
        return driver.findElement(element).isDisplayed();
    }

    protected void tickCheckBox(By element){
        driver.findElement(element).sendKeys(Keys.SPACE);
    }

    protected void pressTabOut(By element){
        driver.findElement(element).sendKeys(Keys.TAB);
    }

    protected void pressEnter(By element){
        driver.findElement(element).submit();
    }

    protected void switchToIframe(By element) {
        driver.switchTo().frame(driver.findElement(element));
    }

    protected void switchToDafaultframe() {
        driver.switchTo().defaultContent();
    }

    public void quit() {
        driver.quit();
    }
}
