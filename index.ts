import { logger } from './src/logger'
import { testFunc } from './src/common'

const moo = testFunc(1)

type funType = (x: number) => number[]
const f: funType = x => [x]
const x = f(3)

logger.info(`welcome to my typescript start kit! ${moo} ${x}`)
