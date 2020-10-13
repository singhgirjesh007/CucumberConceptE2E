package com.stepdefination;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class GlobalHooks {
	
	@Before
	public void intializedriver() {
		System.out.println("----Test Start---------");
		System.out.println("driver defination intialized");
	}
	
	@After
	public void teardown() {
		System.out.println("tear down to comple the test");
		System.out.println("------TestEnd---");
	}
	
	@Before("@P0")
	public void connect() {
		System.out.println("---------------------connect SQL----------------------");
	}

}
