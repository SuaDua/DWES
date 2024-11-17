import winston from 'winston';


const logFormat = winston.format.printf(({ timestamp, level, message }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const loggerwinston = winston.createLogger({
  level: 'info', 
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), 
    winston.format.colorize(), 
    logFormat 
  ),
  transports: [
    new winston.transports.Console(), 
  ],
});

export default loggerwinston;