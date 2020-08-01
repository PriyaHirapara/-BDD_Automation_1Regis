Feature: category scenario
  @test1
Scenario Outline: User should able to navigate to category page.

    Given user is on homepage
    When user click on any "<category>" from the menu
    Then user should able to nevigat to "<category page>"
    Examples:
      | category    | category page                                  |
      | Computers   | https://demo.nopcommerce.com/computers         |
      | Electronics | https://demo.nopcommerce.com/electronics       |
      | Apparel     | https://demo.nopcommerce.com/apparel           |
      | Downloads   | https://demo.nopcommerce.com/digital-downloads |
      | Books       | https://demo.nopcommerce.com/books             |
      | Gift-cards  | https://demo.nopcommerce.com/gift-cards        |



