import { buildLogger } from './../../plugins/logger.plugin';
describe('plugins/logger.plugin.ts', () => {

  test('buildLogger should return a function logger', () => {
    const logger = buildLogger('app.js');
    expect(typeof logger.log).toBe('function');
    expect(typeof logger.error).toBe('function');
    expect(logger.log).toBeInstanceOf(Function);
    expect(logger.error).toBeInstanceOf(Object);
  });

  test(' logger.log should have been called', () => {

    const logger = buildLogger('app.js');
    const spy = jest.spyOn(logger, 'log');
    console.log(logger);
    logger.log('hola');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('error.log should have been called', () => {

    const logger = buildLogger('app.js');
    const spy = jest.spyOn(logger, 'error');
    console.log(logger);
    logger.error('error');
    expect(spy).toHaveBeenCalledTimes(1);
  });

});
