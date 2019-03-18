const StackdriverLogger = require('../../app/lib/StackdriverLogger');
const {
  AssertionError,
} = require('assert');

describe('StackdriverLogger', () => {
  describe('assertions', () => {
    it('throws an error when projectId is not provided', () => {
      expect(() => new StackdriverLogger({})).toThrow(AssertionError);
    });
    it('throws an error when logger is not provided', () => {
      expect(() => new StackdriverLogger({
        projectId: 'fake',
      })).toThrow(AssertionError);
    });
  });

  describe('.log', () => {
    it('should init logger, create entry and write log', () => {
      const sdLoggerLogStub = {
        entry: jest.fn(),
        write: jest.fn(),
      };
      const sdLoggerStub = {
        log: jest.fn().mockReturnValue(sdLoggerLogStub),
      };

      const stackdriverLogger = new StackdriverLogger({
        projectId: 'fake',
        logger: sdLoggerStub,
      });
      stackdriverLogger.log({});

      expect(sdLoggerStub.log).toHaveBeenCalledTimes(1);
      expect(sdLoggerLogStub.entry).toHaveBeenCalledTimes(1);
      expect(sdLoggerLogStub.write).toHaveBeenCalledTimes(1);
    });
  });
});
