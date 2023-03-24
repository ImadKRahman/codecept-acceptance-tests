# Codeceptjs Acceptance Tests

## Description

Automation tests for a given set of user stories. The automation tests are written in JavaScript and uses the CodeceptJS test framwork along with Playwright.

### Requirements:

- Node.js version 12+ or later

### To run tests:

- Pull down repository
- Run the commands below

```sh
npm install
npx codeceptjs run
```

- To run tests in parallel
- Use command below and adjust the number of workers

```sh
npx codeceptjs run-workers 4
```

### Results

If tests fail, screenshots can be found in the output directory
