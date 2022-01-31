'use strict'
import robot from 'robotjs'
import { wait, mouseTo, click, getWindow } from '../../../helpers.js'
import { OPEN_POWERS_BTN, FARMER, EXIT_POWERS } from '../../../config.js'

const screen = { x: 1616, y: 1054 }
// const screen = { x: 1616, y: 500 }

const palceMonkeyLinear = async function (power, amount, { fast = false }) {
  getWindow('bloonstd6')
  mouseTo(OPEN_POWERS_BTN)
  click('left')
  await wait(500)
  mouseTo(power)

  for (let i = 0; i < amount; i++) {
    if (screen.x <= 53) {
      screen.x = 1616
      screen.y -= 48
    }
    if (screen.y <= 21) break

    await wait(fast ? 75 : 130)
    robot.mouseToggle('down', 'left')
    mouseTo(EXIT_POWERS)
    mouseTo(screen)
    robot.mouseToggle('up', 'left')
    mouseTo(power)
    screen.x -= 60
  }
  mouseTo(OPEN_POWERS_BTN)
  click('left')
}

palceMonkeyLinear(FARMER, 200, { fast: true })
