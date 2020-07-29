package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class RegistrationSuccesfullyPage extends Util {
    // store registerSuccessMessage veriable
    private By _registerSuccessMessage = By.xpath("//div/div[text()=\"Your registration completed\"]");
    // declared expecter message
    String expectedRegisterSuccessMessage = "Your registration completed";

    // creat verifyUserRegisterdSucessfully method
    public void verifyUserRegisterdSucessfully()
    {
        // assert expected to expected method
        Assert.assertEquals(getTextformElement(_registerSuccessMessage), expectedRegisterSuccessMessage, "try again");
    }
}
