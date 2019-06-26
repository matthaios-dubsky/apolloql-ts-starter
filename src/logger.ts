// TODO: include line number to customer logger using the error stack trick
import * as winston from 'winston'
// const { combine, timestamp, label, prettyPrint } = winston.format

export default class CutomLogger {
  public static logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [new winston.transports.Console()],
  })
}
