// TODO: include line number to customer logger using the error stack trick
import * as winston from 'winston'
// const { combine, timestamp, label, prettyPrint } = winston.format
const format = winston.format
const transports = winston.transports

const logger = winston.createLogger({
  level: 'info',
  format: format.simple(),
  transports: [new transports.Console()],
})

export { logger }
