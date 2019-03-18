const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const StackdriverLogger = require('./lib/StackdriverLogger');

module.exports = ({
  serviceAccountKey,
  GCLogging,
  port = process.env.PORT || 8080,
}) => {
  const projectId = serviceAccountKey['project_id'];
  const logger = new GCLogging({
    projectId,
    credentials: {
      client_email: serviceAccountKey['client_email'],
      private_key: serviceAccountKey['private_key'],
    },
  });

  const sdLogger = new StackdriverLogger({
    projectId,
    logger,
  });

  app.use(bodyParser.json());
  app.get('/is_alive', (req, res) => {
    return res
        .status(200)
        .send('alive')
        .end();
  });

  app.post('/log', async (req, res) => {
    await sdLogger.log(req.body);
    return res
        .status(200)
        .send('success')
        .end();
  });

  return app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
};
