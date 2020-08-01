package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

@Test
public class HomePage extends Util {
    private By _SearchButton = By.xpath("//input[@value =\"Search\"] ");
    //store locater _welcomeTitleText veriable
    private By _welcomeTitleText =By.xpath("//div[@class =\"topic-block-title\"]/h2");
    //store locater veriable
    private String _expecetedTitleOOfThePage ="Welcome to our store";
    private By _clickOnRegisterButton=By.xpath("//div[@class=\"header-links\"]/ul[1]/li[1]/a");
    //private By _clickOnComputerBurron =By.xpath("//a[text() = \"Computers \"]");


    // creat varifyuserIsOnHomePage method
    public void varifyuserIsOnHomePage()
    {
        // to check user is no right page or not by using assert
        Assert.assertEquals(getTextformElement(_welcomeTitleText), _expecetedTitleOOfThePage, "Welcome to our store");
    }
    public void usercanclickonregisterbutton()
    {
        clickonElement(_clickOnRegisterButton);
    }
    public void userclickonCategorylink(String categoryLink){
        clickonElement(By.linkText(categoryLink));
    }




}
