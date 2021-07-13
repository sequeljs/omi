import SequelOMI from '../src/SequelOMI.js'

import * as mod from '../src/mod.js'

test('exports from module', () => {
  expect(SequelOMI).toStrictEqual(mod.SequelOMI)
})
