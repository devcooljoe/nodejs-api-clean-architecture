import { createLogger, format, transports } from 'winston';


const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    }),
  ),
  transports: [
    new transports.File({ filename: 'log/access.log' }),
    new transports.File({ filename: 'log/error.log', level: 'error' })
  ]
});

export default logger;
