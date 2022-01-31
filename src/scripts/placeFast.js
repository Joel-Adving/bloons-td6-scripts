'use strict'
import robot from 'robotjs'
import { UNIT_SMALLEST } from '../config.js'
// prettier-ignore
import { wait, setWindowFocus, mouseTo, click, createMatrix } from '../helpers.js'

const placeFast = async function (towerSizeClass, random = false, key = '') {
    const matrix = createMatrix(towerSizeClass)
    setWindowFocus('bloonstd6')
    await wait(100)

    robot.keyToggle(key || towerSizeClass.unit.sniperMonkey, 'down')
    const clickToCoords = index => {
        mouseTo(index)
        click()
    }
    matrix.forEach(clickToCoords)
}

placeFast(UNIT_SMALLEST)
// (UNIT_SMALLEST, boolean, "q")
// for random units set boolean to true,
// overwrite key press by adding last parameter string (e.g "a")
