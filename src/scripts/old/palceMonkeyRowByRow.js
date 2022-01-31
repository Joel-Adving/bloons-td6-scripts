'use strict'
import robot from 'robotjs'
import { wait, mouseTo, click, getWindow } from '../../../helpers.js'
// prettier-ignore
import {MONKEY_BEGINNING_X_AXIS,MONKEY_BEGINNING,MONKEY_WIDTH,MONKEY_HEIGHT,BANANA_FARM} from '../../../config.js'

export const palceMonkeyRowByRow = async function (
  amount,
  { fast = false },
  unit
) {
  const point = unit.startingCoords
  getWindow('bloonstd6')
  mouseTo(point)
  robot.keyToggle('H', 'down')
  click()

  for (let i = 0; i < amount; i++) {
    if (point.x >= unit.maxCoords.x) {
      point.x = unit.minCoordsX
      point.y += unit.height
    }
    // 21 === small units
    // 67 === largest units
    if (point.y >= unit.maxCoords.y) break

    await wait(fast ? 75 : 130)
    click()
    mouseTo(point)
    point.x += unit.width
  }
  robot.keyToggle('escape', 'down')
  robot.keyToggle('escape', 'up')
}

// 500 for whole screen
// palceMonkeyLinearV2(500, { fast: true })
palceMonkeyRowByRow(500, { fast: true }, BANANA_FARM)
