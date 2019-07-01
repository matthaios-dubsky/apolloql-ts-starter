// Same as logger.ts, for if you like Class instead.
import * as winston from 'winston'
const format = winston.format
const transports = winston.transports

export default class CutomLogger {
  public static logger = winston.createLogger({
    level: 'info',
    format: format.simple(),
    transports: [new transports.Console()],
  })
}
