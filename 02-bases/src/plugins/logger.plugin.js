import winston from 'winston';
const { combine, timestamp, json } = winston.format;

const buildLogger = (service) => {

  const logger = winston.createLogger({
    level: 'info',
    format: combine(
      timestamp(),
      json(),
    ),
    defaultMeta: { service },
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
  });

  return {
    log: (message) => logger.log('info', message),
    error: (message) => logger.error('error', message),
  };
};

export {
  buildLogger,
}