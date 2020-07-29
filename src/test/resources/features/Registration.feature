@test1
Feature: Registration successfully


  Scenario: User should able to register successfully.
  so that user can use all user functionality on my website

    Given user is on homepage
    When user click on register button
    And user enters all required registration details
    And USER click on registration-submit button
    Then user should able to register successfully
