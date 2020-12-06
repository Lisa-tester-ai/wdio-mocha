### WebdriverIO-v6 with Mocha BDD

### Installation
This project is tested on **Node v12.0.0** and above.  While earlier versions of node may be compatible, but they have not been verified.


`JDK 1.8:` It is optional, install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` on your local environment nothing else.


### Selenium Tests / Supertest API Tests

  To run your test you must have selenium server up and running to execute any webdriverIO tests, or it will fail fast with an error. To start selenium automatically it has been added as part of `services: ['selenium-standalone']` in the *.conf.js. To start supertest API test it has been added as part of project dependencies `"supertest": "^1.2.0"`, That's all. 

### Run Some Sample Tests

To execute the entire test suite in local development, you can use commands mentioned below

`npm run test-local`. You can also run in BrowserStack using `npm run test-browserstack`.

### Logs  

Complete set of execution `logs` will be generated during the run time and can be found in the parent folder location /logs.

### Reporters

This project chose allure reporter to communicate pass/failure.

### The Page Object Design Pattern


