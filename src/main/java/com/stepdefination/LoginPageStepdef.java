package com.stepdefination;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginPageStepdef {
	
	
	@Given("^user launnch the application with url$")
	public void user_launnch_the_application_with_url()  {
	    System.out.println("launch URL");
	    
	}

	@Given("^verify the title the of login page$")
	public void verify_the_title_the_of_login_page()  {
	   System.out.println("Login Page Title Verified");
	    
	}

	@When("^user enter userid and password$")
	public void user_enter_userid_and_password()  {
	  System.out.println("User name password eneterd");
	  
	}



	@Then("^user validated the homepage title$")
	public void user_validated_the_homepage_title() {
	   System.out.println("Scenario validated with title validation");
	   System.out.println("  ");
	   System.out.println("*************************************************");
	   
	    
	}

	@When("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and(String arg1, String arg2)  {
		
	    System.out.println("------Scenario Outline Test case------");
	    System.out.println(arg1+"  "+arg2);
	   
	}


}
