const GCL = require('@google-cloud/logging');
const createApp = require('./express-app');
const serviceAccountKey = require('../service-account-key.json');
createApp({
  serviceAccountKey,
  GCLogging: GCL.Logging,
});
