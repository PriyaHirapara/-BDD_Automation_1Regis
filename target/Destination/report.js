$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("category.feature");
formatter.feature({
  "line": 1,
  "name": "category scenario",
  "description": "",
  "id": "category-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should able to navigate to category page.",
  "description": "",
  "id": "category-scenario;user-should-able-to-navigate-to-category-page.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on any \"\u003ccategory\u003e\" from the menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should able to nevigat to \"\u003ccategory page\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "category-scenario;user-should-able-to-navigate-to-category-page.;",
  "rows": [
    {
      "cells": [
        "category",
        "category page"
      ],
      "line": 9,
      "id": "category-scenario;user-should-able-to-navigate-to-category-page.;;1"
    },
    {
      "cells": [
        "Computers",
        "https://demo.nopcommerce.com/computers"
      ],
      "line": 10,
      "id": "category-scenario;user-should-able-to-navigate-to-category-page.;;2"
    },
    {
      "cells": [
        "Electronics",
        "https://demo.nopcommerce.com/electronics"
      ],
      "line": 11,
      "id": "category-scenario;user-should-able-to-navigate-to-category-page.;;3"
    },
    {
      "cells": [
        "Apparel",
        "https://demo.nopcommerce.com/apparel"
      ],
      "line": 12,
      "id": "category-scenario;user-should-able-to-navigate-to-category-page.;;4"
    },
    {
      "cells": [
        "Downloads",
        "https://demo.nopcommerce.com/digital-downloads"
      ],
      "line": 13,
      "id": "category-scenario;user-should-able-to-navigate-to-category-page.;;5"
    },
    {
      "cells": [
        "Books",
        "https://demo.nopcommerce.com/books"
      ],
      "line": 14,
      "id": "category-scenario;user-should-able-to-navigate-to-category-page.;;6"
    },
    {
      "cells": [
        "Gift-cards",
        "https://demo.nopcommerce.com/gift-cards"
      ],
      "line": 15,
      "id": "category-scenario;user-should-able-to-navigate-to-category-page.;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12315840676,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should able to navigate to category page.",
  "description": "",
  "id": "category-scenario;user-should-able-to-navigate-to-category-page.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on any \"Computers\" from the menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should able to nevigat to \"https://demo.nopcommerce.com/computers\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepfDeft.user_is_on_homepage()"
});
formatter.result({
  "duration": 686660942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 19
    }
  ],
  "location": "MyStepfDeft.userClickOnAnyFromTheMenu(String)"
});
formatter.result({
  "duration": 2207307634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.nopcommerce.com/computers",
      "offset": 32
    }
  ],
  "location": "MyStepfDeft.userShouldAbleToNevigatTo(String)"
});
formatter.result({
  "duration": 64994188,
  "status": "passed"
});
formatter.after({
  "duration": 2282873620,
  "status": "passed"
});
formatter.before({
  "duration": 7685885655,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should able to navigate to category page.",
  "description": "",
  "id": "category-scenario;user-should-able-to-navigate-to-category-page.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on any \"Electronics\" from the menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should able to nevigat to \"https://demo.nopcommerce.com/electronics\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepfDeft.user_is_on_homepage()"
});
formatter.result({
  "duration": 112251688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 19
    }
  ],
  "location": "MyStepfDeft.userClickOnAnyFromTheMenu(String)"
});
formatter.result({
  "duration": 2484970618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.nopcommerce.com/electronics",
      "offset": 32
    }
  ],
  "location": "MyStepfDeft.userShouldAbleToNevigatTo(String)"
});
formatter.result({
  "duration": 59909702,
  "status": "passed"
});
formatter.after({
  "duration": 283070328,
  "status": "passed"
});
formatter.before({
  "duration": 7977161291,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should able to navigate to category page.",
  "description": "",
  "id": "category-scenario;user-should-able-to-navigate-to-category-page.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on any \"Apparel\" from the menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should able to nevigat to \"https://demo.nopcommerce.com/apparel\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepfDeft.user_is_on_homepage()"
});
formatter.result({
  "duration": 155494196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 19
    }
  ],
  "location": "MyStepfDeft.userClickOnAnyFromTheMenu(String)"
});
formatter.result({
  "duration": 3444647092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.nopcommerce.com/apparel",
      "offset": 32
    }
  ],
  "location": "MyStepfDeft.userShouldAbleToNevigatTo(String)"
});
formatter.result({
  "duration": 22997786,
  "status": "passed"
});
formatter.after({
  "duration": 335040706,
  "status": "passed"
});
formatter.before({
  "duration": 7880077538,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should able to navigate to category page.",
  "description": "",
  "id": "category-scenario;user-should-able-to-navigate-to-category-page.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on any \"Downloads\" from the menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should able to nevigat to \"https://demo.nopcommerce.com/digital-downloads\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepfDeft.user_is_on_homepage()"
});
formatter.result({
  "duration": 130747415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Downloads",
      "offset": 19
    }
  ],
  "location": "MyStepfDeft.userClickOnAnyFromTheMenu(String)"
});
formatter.result({
  "duration": 20521006754,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Downloads\"}\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027KAXAL-PC\u0027, ip: \u0027192.168.0.22\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Kaxal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57558}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4d0c1f8c4f8c8a6a83b270722a167a57\n*** Element info: {Using\u003dlink text, value\u003dDownloads}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.Util.clickonElement(Util.java:29)\r\n\tat org.example.HomePage.userclickonCategorylink(HomePage.java:30)\r\n\tat org.example.MyStepfDeft.userClickOnAnyFromTheMenu(MyStepfDeft.java:47)\r\n\tat ✽.When user click on any \"Downloads\" from the menu(category.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.nopcommerce.com/digital-downloads",
      "offset": 32
    }
  ],
  "location": "MyStepfDeft.userShouldAbleToNevigatTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2328581398,
  "status": "passed"
});
formatter.before({
  "duration": 9061640309,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should able to navigate to category page.",
  "description": "",
  "id": "category-scenario;user-should-able-to-navigate-to-category-page.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on any \"Books\" from the menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should able to nevigat to \"https://demo.nopcommerce.com/books\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepfDeft.user_is_on_homepage()"
});
formatter.result({
  "duration": 146733827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 19
    }
  ],
  "location": "MyStepfDeft.userClickOnAnyFromTheMenu(String)"
});
formatter.result({
  "duration": 2499265764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.nopcommerce.com/books",
      "offset": 32
    }
  ],
  "location": "MyStepfDeft.userShouldAbleToNevigatTo(String)"
});
formatter.result({
  "duration": 78681677,
  "status": "passed"
});
formatter.after({
  "duration": 2286647001,
  "status": "passed"
});
formatter.before({
  "duration": 8541614959,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should able to navigate to category page.",
  "description": "",
  "id": "category-scenario;user-should-able-to-navigate-to-category-page.;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on any \"Gift-cards\" from the menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should able to nevigat to \"https://demo.nopcommerce.com/gift-cards\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepfDeft.user_is_on_homepage()"
});
formatter.result({
  "duration": 173725650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift-cards",
      "offset": 19
    }
  ],
  "location": "MyStepfDeft.userClickOnAnyFromTheMenu(String)"
});
formatter.result({
  "duration": 20617714624,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Gift-cards\"}\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027KAXAL-PC\u0027, ip: \u0027192.168.0.22\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Kaxal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57649}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 71d82dc29710cdafd89a5e17eac424d0\n*** Element info: {Using\u003dlink text, value\u003dGift-cards}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.example.Util.clickonElement(Util.java:29)\r\n\tat org.example.HomePage.userclickonCategorylink(HomePage.java:30)\r\n\tat org.example.MyStepfDeft.userClickOnAnyFromTheMenu(MyStepfDeft.java:47)\r\n\tat ✽.When user click on any \"Gift-cards\" from the menu(category.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.nopcommerce.com/gift-cards",
      "offset": 32
    }
  ],
  "location": "MyStepfDeft.userShouldAbleToNevigatTo(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2453429698,
  "status": "passed"
});
});