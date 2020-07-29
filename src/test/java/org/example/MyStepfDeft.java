package org.example;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepfDeft
{
    // creat objects
    HomePage homePage = new HomePage();
    RegistrationPage registrationPage = new RegistrationPage();
    RegistrationSuccesfullyPage registrationSuccesfullyPage = new RegistrationSuccesfullyPage();

    // creat all methods name accorrding to scenarious
    @Given("^user is on homepage$")
    public void user_is_on_homepage()
    {
        homePage.varifyuserIsOnHomePage();
    }
    @When("^user click on register button$")
    public void user_click_on_register_button()
    {
        homePage.usercanclickonregisterbutton();
    }
    @When("^user enters all required registration details$")
    public void user_enters_all_required_registration_details()
    {
        registrationPage.userEnterRegistrationDetails();
    }
    @When("^USER click on registration-submit button$")
    public void user_click_on_registration_submit_button()
    {
        registrationPage.userIsClickingonRegistrationsubmitButton();
    }
    @Then("^user should able to register successfully$")
    public void user_should_able_to_register_successfully()
    {
        registrationSuccesfullyPage.verifyUserRegisterdSucessfully();
    }
}
