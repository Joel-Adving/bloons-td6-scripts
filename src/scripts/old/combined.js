'use strict'
import robot from 'robotjs'
import { mouse, keyboard, Key, sleep } from '@nut-tree/nut-js'
// prettier-ignore
import { getWindow, mouseTo,ranPixelCoords, random } from '../../../helpers.js'
// prettier-ignore
import {POWER_ICON_TACKS, POWER_ICON_MONEY} from '../../../config.js'

// import { palceMonkeyLinearV2 } from './palceMonkeyLinearV2.js'
import { placeMonkeyRandomV2 } from '../placeMonkeyRandom.js'
import { spamPower } from '../spamPower.js'

const main = async function () {
  getWindow('bloonstd6')
  try {
    await sleep(1000)
    await keyboard.type('Q')
  } catch (err) {
    console.log(err)
  }
}
main()

// await wait(100)
// await spamPower({ amount: 10, power: POWER_ICON_MONEY, speed: 35 })
// await wait(100)
// await placeMonkeyRandomV2(100, { key: 'Q' })
// await wait(100)
// await spamPower({ amount: 30, power: POWER_ICON_TACKS, speed: 35 })

/* Set the scan code for keyup */
// if ( flags & KEYEVENTF_KEYUP ) {
// 	scan |= 0x80;
// }
