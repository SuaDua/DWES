import winston from 'winston';

const { combine, timestamp, printf, colorize } = winston.format;

// Configuración del formato del log
const logFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

// Crear el logger
const logger = winston.createLogger({
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    colorize(),
    logFormat
  ),
  transports: [
    new winston.transports.Console(),
  ],
  exitOnError: false,
});

// Función para manejar errores de descarga
export const logDownloadError = (err, res) => {
  logger.error(`Error al descargar el archivo: ${err.message}`);
  res.status(500).json({ error: 'Error al descargar el archivo.' });
};

export default logger;