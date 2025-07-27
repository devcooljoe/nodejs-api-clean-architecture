import { createLogger, format, transports } from 'winston';

const { combine, timestamp, errors, printf } = format;

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    errors({ stack: true }),
    printf(({ timestamp, level, message, stack }) => {
      return `${timestamp} ${level}: ${stack}`;
    })
  ),
  transports: [
    new transports.File({ filename: 'log/access.log' }),
    new transports.File({ filename: 'log/error.log', level: 'error' }),
  ]
});

export default logger;