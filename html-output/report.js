$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("driverLuanch.feature");
formatter.feature({
  "line": 1,
  "name": "Driver launch with parameter",
  "description": "",
  "id": "driver-launch-with-parameter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 747500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Teest Driver launch",
  "description": "",
  "id": "driver-launch-with-parameter;teest-driver-launch",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LaunchBrwoser.launch_browser()"
});
formatter.result({
  "duration": 147007800,
  "status": "passed"
});
formatter.after({
  "duration": 1852700,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "HomePage link validation",
  "description": "",
  "id": "homepage-link-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 636900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Number of valid links on HomePage",
  "description": "",
  "id": "homepage-link-validation;number-of-valid-links-on-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user launnch the application with url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verify the title the of login page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter userid and password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user count the tag by link tag a",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepdef.user_launnch_the_application_with_url()"
});
formatter.result({
  "duration": 3435800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.verify_the_title_the_of_login_page()"
});
formatter.result({
  "duration": 399100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.user_enter_userid_and_password()"
});
formatter.result({
  "duration": 387600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepdef.user_count_the_tag_by_link_tag_a()"
});
formatter.result({
  "duration": 418200,
  "status": "passed"
});
formatter.after({
  "duration": 430600,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login in Application",
  "description": "",
  "id": "login-in-application",
  "keyword": "Feature"
});
formatter.before({
  "duration": 120600,
  "status": "passed"
});
formatter.before({
  "duration": 367600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launnch the application with url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepdef.user_launnch_the_application_with_url()"
});
formatter.result({
  "duration": 100300,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User Login with Valid Credentials",
  "description": "",
  "id": "login-in-application;user-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@P0"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "verify the title the of login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter userid and password",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user validated the homepage title",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepdef.verify_the_title_the_of_login_page()"
});
formatter.result({
  "duration": 206200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.user_enter_userid_and_password()"
});
formatter.result({
  "duration": 93200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.user_validated_the_homepage_title()"
});
formatter.result({
  "duration": 537200,
  "status": "passed"
});
formatter.after({
  "duration": 408300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "User login with multiple credentials",
  "description": "",
  "id": "login-in-application;user-login-with-multiple-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user launnch the application with url",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "verify the title the of login page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user validated the homepage title",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-in-application;user-login-with-multiple-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 20,
      "id": "login-in-application;user-login-with-multiple-credentials;;1"
    },
    {
      "cells": [
        "test@test",
        "ggjgjgj"
      ],
      "line": 21,
      "id": "login-in-application;user-login-with-multiple-credentials;;2"
    },
    {
      "cells": [
        "test@gfhf",
        "hggjjgk"
      ],
      "line": 22,
      "id": "login-in-application;user-login-with-multiple-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 376300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launnch the application with url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepdef.user_launnch_the_application_with_url()"
});
formatter.result({
  "duration": 332400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User login with multiple credentials",
  "description": "",
  "id": "login-in-application;user-login-with-multiple-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user launnch the application with url",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "verify the title the of login page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter \"test@test\" and \"ggjgjgj\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user validated the homepage title",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepdef.user_launnch_the_application_with_url()"
});
formatter.result({
  "duration": 167600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.verify_the_title_the_of_login_page()"
});
formatter.result({
  "duration": 367500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@test",
      "offset": 12
    },
    {
      "val": "ggjgjgj",
      "offset": 28
    }
  ],
  "location": "LoginPageStepdef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 7457900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.user_validated_the_homepage_title()"
});
formatter.result({
  "duration": 104600,
  "status": "passed"
});
formatter.after({
  "duration": 81400,
  "status": "passed"
});
formatter.before({
  "duration": 514300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user launnch the application with url",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepdef.user_launnch_the_application_with_url()"
});
formatter.result({
  "duration": 95300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User login with multiple credentials",
  "description": "",
  "id": "login-in-application;user-login-with-multiple-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user launnch the application with url",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "verify the title the of login page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter \"test@gfhf\" and \"hggjjgk\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user validated the homepage title",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepdef.user_launnch_the_application_with_url()"
});
formatter.result({
  "duration": 65600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.verify_the_title_the_of_login_page()"
});
formatter.result({
  "duration": 304500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gfhf",
      "offset": 12
    },
    {
      "val": "hggjjgk",
      "offset": 28
    }
  ],
  "location": "LoginPageStepdef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 560400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.user_validated_the_homepage_title()"
});
formatter.result({
  "duration": 617900,
  "status": "passed"
});
formatter.after({
  "duration": 146600,
  "status": "passed"
});
});