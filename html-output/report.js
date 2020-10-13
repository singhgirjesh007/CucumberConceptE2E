$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "HomePage link validation",
  "description": "",
  "id": "homepage-link-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 357200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Number of valid links on HomePage",
  "description": "",
  "id": "homepage-link-validation;number-of-valid-links-on-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user launnch the application with url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "verify the title the of login page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enter userid and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user count the tag by link tag a",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepdef.user_launnch_the_application_with_url()"
});
formatter.result({
  "duration": 225356100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.verify_the_title_the_of_login_page()"
});
formatter.result({
  "duration": 826500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.user_enter_userid_and_password()"
});
formatter.result({
  "duration": 234600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepdef.user_count_the_tag_by_link_tag_a()"
});
formatter.result({
  "duration": 315700,
  "status": "passed"
});
formatter.after({
  "duration": 399700,
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
  "duration": 355900,
  "status": "passed"
});
formatter.before({
  "duration": 405800,
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
  "duration": 482500,
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
  "duration": 303700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.user_enter_userid_and_password()"
});
formatter.result({
  "duration": 80600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.user_validated_the_homepage_title()"
});
formatter.result({
  "duration": 530300,
  "status": "passed"
});
formatter.after({
  "duration": 401200,
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
  "duration": 593200,
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
  "duration": 287400,
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
  "duration": 252600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.verify_the_title_the_of_login_page()"
});
formatter.result({
  "duration": 353000,
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
  "duration": 6859600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.user_validated_the_homepage_title()"
});
formatter.result({
  "duration": 218300,
  "status": "passed"
});
formatter.after({
  "duration": 74700,
  "status": "passed"
});
formatter.before({
  "duration": 265100,
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
  "duration": 127600,
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
  "duration": 102100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.verify_the_title_the_of_login_page()"
});
formatter.result({
  "duration": 760600,
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
  "duration": 202500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepdef.user_validated_the_homepage_title()"
});
formatter.result({
  "duration": 149200,
  "status": "passed"
});
formatter.after({
  "duration": 100200,
  "status": "passed"
});
});