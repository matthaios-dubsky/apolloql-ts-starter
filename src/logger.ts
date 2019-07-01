// TODO: include line number to customer logger using the error stack trick
// TODO: add declartor!
// Ref:
// [Decorators & metadata reflection in TypeScript: From Novice to Expert (Part IV)]
// (http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-4)
// [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
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
