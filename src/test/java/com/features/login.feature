Feature: Login in Application

Background:
Given user launnch the application with url

@P0 @Smoke
Scenario: User Login with Valid Credentials
And verify the title the of login page
When user enter userid and password
Then user validated the homepage title


Scenario Outline: User login with multiple credentials
Given user launnch the application with url
And verify the title the of  login page
When user enter "<username>" and "<password>"
And user test variable "<captain>" done
Then user validated the homepage title

Examples:
	|username|password|cpatain|
	|test@test|ggjgjgj|gghd|
	|test@gfhf|hggjjgk|hgjgjg|