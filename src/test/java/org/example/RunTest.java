package org.example;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features ="src\\test\\Resources\\features", tags = "@test1",format = {"pretty","html:target/Destination"})

// creat runtest class
public class RunTest {
}


