$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Registration.feature");
formatter.feature({
  "line": 2,
  "name": "Registration successfully",
  "description": "",
  "id": "registration-successfully",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test1"
    }
  ]
});
formatter.before({
  "duration": 17556188117,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should able to register successfully.",
  "description": "so that user can use all user functionality on my website",
  "id": "registration-successfully;user-should-able-to-register-successfully.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters all required registration details",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "USER click on registration-submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user should able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepfDeft.user_is_on_homepage()"
});
formatter.result({
  "duration": 559634393,
  "status": "passed"
});
formatter.match({
  "location": "MyStepfDeft.user_click_on_register_button()"
});
formatter.result({
  "duration": 1922476102,
  "status": "passed"
});
formatter.match({
  "location": "MyStepfDeft.user_enters_all_required_registration_details()"
});
formatter.result({
  "duration": 2961583362,
  "status": "passed"
});
formatter.match({
  "location": "MyStepfDeft.user_click_on_registration_submit_button()"
});
formatter.result({
  "duration": 2321635208,
  "status": "passed"
});
formatter.match({
  "location": "MyStepfDeft.user_should_able_to_register_successfully()"
});
formatter.result({
  "duration": 89565553,
  "status": "passed"
});
formatter.after({
  "duration": 1958701987,
  "status": "passed"
});
});