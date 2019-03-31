# wix-code telemetry sink example for google stackdriver on GAE

[![Build Status](https://travis-ci.org/wix-incubator/wix-telemetry-appengine.svg?branch=master)](https://travis-ci.org/wix-incubator/wix-telemetry-appengine)

  - [Setup](#setup)
  - [Development](#development)
    - [Install](#install)
    - [Run tests](#run-tests)
    - [Run locally](#run-locally)
  - [Deploy to App Engine](#deploy-to-app-engine)



## Setup

- Follow GCP instructions for [creating a google app engine standard environment for node.js](https://cloud.google.com/appengine/docs/standard/nodejs/quickstart).
- [Set up authentication for stackdriver client](https://cloud.google.com/logging/docs/reference/libraries) by adding a `service-account-key.json`.
 


## Development

#### Install

Before you can run or deploy the sample, you need to install:

    npm i

#### Run tests

    npm run test
    
#### Run locally
    
    npm start

## Deploy to App Engine

    npm run deploy
