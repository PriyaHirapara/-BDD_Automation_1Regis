package org.example;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.testng.annotations.Test;
import java.util.concurrent.TimeUnit;

@Test
public class BrowserManager extends Util {
    LoadProp loadProp = new LoadProp();


    public void setBrowser()
    {
        // store browsername in veriable
        String browserName = "chrome";
        if (browserName.equalsIgnoreCase("chrome"))
           {
               //setting up Chromedriver path
           System.setProperty("webdriver.chrome.driver", "src\\test\\BrowserDrivers\\chromedriver.exe");//creating crom driver object to one google crom driver
            // driver open wed page
            driver = new ChromeDriver();
        }
        else if (browserName.equalsIgnoreCase("firefox"))
        {
            System.setProperty("webdriver.gecko.driver", "src\\test\\BrowserDrivers\\geckodriver.exe");
            driver = new FirefoxDriver();

        } else if (browserName.equalsIgnoreCase("ie"))
        {
            System.setProperty("webdriver.ie.driver", "src\\test\\BrowserDrivers\\IEDriverServer.exe");
            driver = new InternetExplorerDriver();

        } else // if you enter any other name in veriable it shos this msg
            {
            System.out.println("your Browser name is wrong or empty" + browserName);
        }
        // maxinizing screen
        driver.manage().window().maximize();
        //applying implist wait of 20 sec to the driver ins
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        // open nop commerce web side
        driver.get(loadProp.getProperty("URL"));
        //method for browser close
    }
        public void browserclose () {
            // close the browser
            driver.close();
        }
    }