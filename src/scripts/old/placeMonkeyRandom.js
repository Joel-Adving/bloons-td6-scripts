'use strict'
import robot from 'robotjs'
// prettier-ignore
import { wait, getWindow,mouseTo,click,ranPixelCoords } from '../../../helpers.js'
// prettier-ignore
import { MAX_SCREEN, MIN_SCREEN, OPEN_POWERS_BTN,POWER_ICON_FARMER ,EXIT_POWERS,POOL} from '../../../config.js'

const placeMonkeyRandom = async function (power, amount) {
  getWindow('bloonstd6')
  mouseTo(OPEN_POWERS_BTN)
  click('left')
  await wait(500)
  mouseTo(power)

  for (let i = 0; i < amount; i++) {
    await wait(130)
    robot.mouseToggle('down', 'left')
    mouseTo(EXIT_POWERS)
    mouseTo(ranPixelCoords(MIN_SCREEN, MAX_SCREEN))
    robot.mouseToggle('up', 'left')
    mouseTo(power)
  }
  mouseTo(OPEN_POWERS_BTN)
  click('left')
}

placeMonkeyRandom(POWER_ICON_FARMER, 10)
