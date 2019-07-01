import { logger } from './src/logger'
// import { testFunc } from './src/common'

// const moo = testFunc(1)

// type funType = (x: number) => number[]
// const f: funType = x => [x]
// const x = f(3)

// logger.info(`welcome to my typescript start kit! ${moo} ${x}`)

interface Moo {
  name: string
}

class C1 {
  // private __nominal: void // for emulating nominal typing
  public name: string = ''
  constructor(name: string) {
    this.name = name
  }
}
logger.info(`Type of C1: ${typeof C1}`)
logger.info(`Instanceof of C1: ${new C1('C1') instanceof C1}`)
const moo = new C1('moo')

type T = (o: C1) => string
const fun1: T = o => o.name

const out1 = fun1(moo)
logger.info(`out1: ${out1}`)

class C2 {
  public name: string
  public c2Stuff = ''
  constructor(name: string) {
    this.name = name
    this.c2Stuff = name + '_c2'
  }
}
logger.info(`Type of C2: ${typeof C1}`)
logger.info(`Instanceof of C2 is C1: ${new C2('C2') instanceof C1}`)

const coco = new C2('coooo')
const out2 = fun1(coco)
logger.info(`out2: ${out2}`)

const moo2: Moo = { name: 'moo moo' }
const out3 = fun1(moo2)
logger.info(`out3: ${out3}`)

abstract class AMoo {
  abstract name: string
}

class CMoo extends AMoo {
  public name: string
  constructor(name: string) {
    super()
    this.name = name
  }
}

const solidMoo = new CMoo('solid moo ...')
const out4 = fun1(solidMoo)
logger.info(`out2: ${out4}`)
logger.info(`Instanceof of SolidMoo is C1: ${solidMoo instanceof C1}`)

logger.info('welcome to my typescript start kit!')
