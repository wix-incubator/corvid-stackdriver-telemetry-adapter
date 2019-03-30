# wix-code telemetry sink example for google stackdriver on GAE

[![Build Status](https://travis-ci.org/wix-incubator/wix-telemetry-appengine.svg?branch=master)](https://travis-ci.org/wix-incubator/wix-telemetry-appengine)

- [wix-code telemetry sink example for google appengine](#wix-code-telemetry-sink-example-for-google-appengine)
  - [Setup](#setup)
  - [Development](#development)
    - [Install](#install)
    - [Running the tests](#running-the-tests)
    - [Running locally](#running-locally)
  - [Deploying to App Engine](#deploying-to-app-engine)



## Setup

- Follow GCP instructions for [creating a google app engine standard environment for node.js](https://cloud.google.com/appengine/docs/standard/nodejs/quickstart).
- [Set up authentication for stackdriver client](https://cloud.google.com/logging/docs/reference/libraries) by adding a `service-account-key.json`.
 


## Development

#### Install

Before you can run or deploy the sample, you need to install:

    npm i

#### Running the tests

    npm run test
    
#### Running locally
    
    npm start

## Deploying to App Engine

    npm run deploy
