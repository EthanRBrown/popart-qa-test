# Pop Art QA Technical Exercise

This exercise is a simulation of a (very) small "calculator" project for a client.  While the project itself is small and very limited in scope, it is representative of the type of projects we do, and it has enough grist that it requires a QA plan, test infrastructure, etc.

## General Guidance

We've build this exercise with the hopes that it will be fun, engaging, and not take too much of your time.  We believe that you can show off your skill if you spend 1-2 hours on it, but depending on your experience and free time, you may wish to spend more time (certainly there's enough grist that you _could_ spend much more time, though we are not expecting it).

There are technical components to the exercise which are optional; we don't expect everyone to have expertise in the [MERN](http://mern.io) stack or have expertise in writing [Jest unit tests](https://facebook.github.io/jest/).  Furthermore, integration testing (using Selenium / Sauce Labs / Browserstack) can be very involved, so while we would welcome an example of an integration test, we realize that may be too involved for a pre-employment exercise, so use your own judgement.

## Your Task (Should You Choose to Accept It)

1. Review the [requirements for the project](/REQUIREMENTS.md).
1. Check out the [project running on staging](http://resistance.zepln.com.s3-website-us-west-2.amazonaws.com); it shouldn't take you long to spot some problems!
1. Write a QA plan (you may use whatever format or tools you choose; imagine you are coming into an organization that has _no_ QA process, and you are responsible for establishing everything!).
1. Execute (or partially execute) the QA plan; the project (intentionally) has flaws, and they should be uncovered by executing the QA plan.
1. Review [unit tests](/src/__tests__/ResistorInputs.test.js); what are these tests missing?  How would you coach the developer responsible for these unit tests? (If you aren't familiar with Jest, you may skip this.)
1. Write one or more unit tests against a component of your choosing to support the requirements.  If you feel that the component under test needs to be modified for testability, please feel free to do so.  Imagine you are writing a "best practice" unit test to demonstrate to a developer how to write better unit tests.  Document accordingly.  (If you aren't familiar with Jest, you may skip this.)
1. Write an integration test to exercise some aspect of the requirements.  You may use whatever tools or frameworks you're comfortable with.  If you do not have time for this, you may simply describe the tools you would use, and the approach (we understand that integration testing can be very involved).
1. Provide a quality report for the project.  You may include whatever assessment or metrics you feel are relevant; imagine you are working for an organization who doesn't have any existing QA maturity.

## Technical Details: Building the Project and Running the Tests

* Install [Node v6](https://nodejs.org/en/) or later if you don't already have it
* Clone repo: `git clone git@github.com:EthanRBrown/popart-qa-test.git`
* From repo directory, install dependencies: `npm install`
* To run dev server: `npm start`
* To run tests: `npm test`

