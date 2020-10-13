package com.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
	features= {"src\\test\\java\\com\\features"},
	glue= {"com\\stepdefination"},
	strict = true,
	monochrome = true,
	plugin = {"pretty","html:html-output","json:target/cucumber-reports/CucumberTestReport.json"}
	//tags = {"@Smoke"}	
		
		
		)

public class TestRunnerCucumber {
	
	

}
