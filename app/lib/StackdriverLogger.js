/* eslint-disable require-jsdoc */
const assert = require('assert');

class StackdriverLogger {
  constructor({projectId, logger}) {
    assert(projectId, 'serviceAccountKey must be provided');
    assert(logger, 'logger must be provided');
    this._projectId = projectId;
    this._logger = logger;
  }

  async log(payload) {
    const {metadata, jsonPayload} = this._parsePayload(payload);
    const log = this._logger.log(metadata.logName);
    const entry = log.entry(metadata, jsonPayload);
    await log.write([entry]);
  }

  _parsePayload(payload) {
    payload.logName = `projects/${this._projectId}/logs/${payload.logName}`;
    const metadata = {...payload};
    const jsonPayload = payload.jsonPayload;
    delete metadata.jsonPayload;
    if (!metadata.resource) {
      metadata.resource = this._globalResource();
    }
    return {metadata, jsonPayload};
  }

  _globalResource() {
    return {
      type: 'global',
      labels: {
        project_id: this._projectId,
      },
    };
  }
}
module.exports = StackdriverLogger;

