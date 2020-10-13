Feature: HomePage link validation


@Smoke
Scenario: Number of valid links on HomePage
Given user launnch the application with url
And verify the title the of login page
When user enter userid and password
Then user count the tag by link tag a