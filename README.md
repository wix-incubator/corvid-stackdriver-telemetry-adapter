# Corvid by Wix Example: Site Monitoring Sink for Google Stackdriver on GAE

This project is a Node.js based example of an adapter for Google Stackdriver that lets you integrate Site monitoring with your Corvid enabled Wix site.

You can use this project as a basis for deploying your own adapter. 

[![Build Status](https://travis-ci.org/wix/corvid-stackdriver-telemetry-adapter.svg?branch=master)](https://travis-ci.org/wix/corvid-stackdriver-telemetry-adapter)

  - [Setup](#setup)
  - [Development](#development)
    - [Install](#install)
    - [Run tests](#run-tests)
    - [Run locally](#run-locally)
  - [Deploy to App Engine](#deploy-to-app-engine)
  - [Register for Site Monitoring](#register-for-site-monitoring)



## Setup

- Install Node v10 (currently v10.15.3)
- Install git
- `$ git clone https://github.com/wix/corvid-stackdriver-telemetry-adapter.git`
- `$ cd velo-gcloud-logging`
- Follow GCP instructions for [creating a google app engine standard environment for node.js](https://cloud.google.com/appengine/docs/standard/nodejs/quickstart).
- [Set up authentication for a stackdriver client](https://cloud.google.com/logging/docs/reference/libraries) by adding a `service-account-key.json`.
 


## Development

#### Install

Before you can run or deploy the sample you need to install:

    npm i

#### Run tests

    npm run test
    
#### Run locally
    
    npm start

## Deploy to App Engine

    npm run deploy

## Register for Site Monitoring
- Once your service is up and running you can test it using `/is_alive` endpoint.
- Register for Site Monitoring in your Wix Business Manager: **Settings -> Site Monitoring -> Connect Monitoring Tools** -> 
  - Enter your service URL with `/log`
