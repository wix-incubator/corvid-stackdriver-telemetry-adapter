# 1) Introduction
# 2) Build Status
# 3) Installation
-Node v10 Installation
-Git Installation
-Clone Repository
-Environment Setup
# 4) Development
-Editing
-Installing Dependencies
# 5) Testing
-Running Tests
# 6) Local Deployment
-Running Locally
# 7) App Engine Deployment
# 8) Site Telemetry Sign-up
-Testing Endpoint
-Wix Business Manager Sign-up
# 9) Conclusion
# 10) Update the README file

# 1) Introduction: An Example for Telemetry Pool for Google Stackdriver on GAE using Corvid by Wix
# 2) Build Status
# 3) Installation: Steps for Installing Required Software and Setting up the Environment
-Node v10 Installation
-Git Installation
-Cloning the Repository
-Setting up the Environment for Node.js on Google App Engine
# 4) Development: Steps for Editing and Installing Dependencies
-Editing the Code
-Installing Dependencies
# 5) Testing: Steps for Running Tests
-Running Tests
# 6) Local Deployment: Steps for Running the Example Locally
-Running Locally
# 7) App Engine Deployment: Steps for Deploying to Google App Engine
# 8) Site Telemetry Sign-up: Steps for Signing up for Site Telemetry on Wix Business Manager
-Testing the Endpoint
-Signing up for Site Telemetry in Wix Business Manager
# 9) Conclusion
# 10) Update the README file

Corvid by Wix Example: Site Monitoring Repository for Google Stackdriver in GAE
This project is an example of a Node.js based adapter for Google Stackdriver that allows you to integrate Site monitoring with your Corvid enabled Wix site. You can use this project as a basis for deploying your own adapter.

Setup
Install node v10 (currently v10.15.3)
Install Git
$ git clone https://github.com/wix/corvid-stackdriver-telemetry-adapter.git
$ cd wix-telemetry-appengine
Follow the GCP instructions for creating a Google App Engine Standard Environment for Node.js
Install the required packages by running the npm i command
Development and Distribution
Run npm run test to run the tests
Run npm start to run locally
Run npm run deploy to deploy to App Engine
Site Monitoring Record
Once your monitoring service has started, you can test it using the /is_alive endpoint
You can save your service URL in Site Tracking settings in your Wix Business Manager: Settings -> Site Tracking -> Link Tracking Tools -> Enter your Service URL
This is the "Readme" article that guides you through integrating Corvid features on your Wix site for Google Stackdriver.



