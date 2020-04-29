## To run tests from command line

mvn clean verify -Dit.test=donate

## Installation process

-Download the recommended IDE to get the project working...
-Intelli IDEA community edition 2019.3.4 (or higher versions if they are released in future)
https://www.jetbrains.com/idea/download/other.html

-Upload the project from github (barnardos project space) and that's all. Tests are ready to run.

## Contents and structure of tests

-This is a Maven project, using Java framework with Cucumber gerkin language.

-A Feature File is an entry point to the Cucumber tests. This is a file where you will describe your
tests in Descriptive language (Like English). It is an essential part of Cucumber, as it serves as an
automation test script as well as live documents.
                        src/test/resources/features

-A Step Definition is a Java method Kotlin function JavaScript function Ruby block with an
expression that links it to one or more Gherkin steps. When Cucumber executes a Gherkin step in a scenario,
it will look for a matching step definition to execute.
                        src/test/java/com/barnardos/stepdefs

-Page Object Model is a Design Pattern which has become popular in Selenium Test Automation.
It is widely used design pattern in Selenium for enhancing test maintenance and reducing code duplication.
A page object is an object-oriented class that serves as an interface to a page of your Application Under Test(AUT).
Script maintenance looks easy. In future, if there is a change in the web element, we need to make the
change in just 1 class file and not 10 different scripts. This approach is called Page Object Model(POM).
It helps make the code more readable, maintainable, and reusable.
                        src/test/java/com/barnardos/pageobjects

-All the selenium web connectors are placed in one place for enhancing selenium commands maintenance and
reducing code duplication.
                        src/test/java/com/barnardos/util

-In very simple terms, Cucumber test runner class is one of the many mechanisms using which you can
run Cucumber feature file.
                        src/test/java/com/barnardos/runners

-Screen shots are captured for failing tests to analyse exactly at what point and place the test
stopped executing and failed.
                        src/test/resources/screenshots

-Test Reports are really useful and can help in analysing the pass and failed scenarios.
                        target/cucumber-reports



