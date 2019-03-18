/* eslint-disable require-jsdoc */
const fetch = require('node-fetch');
const expressApp = require('../app/express-app');
describe('app', () => {
  let app;
  const port = 8080;
  const appUrl = `http://localhost:${port}`;
  const fakeServiceAccountKey = {
    project_id: 'fake',
    private_key: 'fake',
    client_email: 'fake',
  };

  beforeAll(() => {
    app = expressApp({
      serviceAccountKey: fakeServiceAccountKey,
      GCLogging: FakeGCLogging,
      port,
    });
  });
  afterAll(() => {
    app.close();
  });

  it('should respond with alive to /is_alive', async () => {
    const res = await fetch(`${appUrl}/is_alive`);
    expect(res.status).toBe(200);
    return expect(res.text()).resolves.toBe('alive');
  });

  it('should succeed to post a log', async () => {
    const body = {
      logName: 'some-log-name',
      jsonPayload: {
        message: 'some-message',
      },
    };
    
    const res = await fetch(`${appUrl}/log`, {method: 'post', body});
    expect(res.status).toBe(200);
    return expect(res.text()).resolves.toBe('success');
  });
});

class FakeGCLogging {
  constructor() {

  }
  log() {
    return {
      entry: () => {},
      write: () => {},
    };
  }
}
