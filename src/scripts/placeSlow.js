'use strict'
import { UNIT_SMALLEST } from '../config.js'
import { wait, setWindowFocus, createMatrix } from '../helpers.js'
import { mouse, Point, sleep } from '@nut-tree/nut-js'
import ks from 'node-key-sender'

const placeSlow = async function (towerSizeClass, random = false, key = '') {
    const matrix = createMatrix(towerSizeClass)
    setWindowFocus('bloonstd6')
    await wait(100)

    for (let i = 0; i < matrix.length; i++) {
        const target = new Point(matrix[i].x, matrix[i].y)
        ks.sendKey(key || towerSizeClass.unit.dartMonkey)
        await mouse.setPosition(target)
        await sleep(25)
        await mouse.leftClick()
        await sleep(25)
    }
}
placeSlow(UNIT_SMALLEST)

// (UNIT_SMALLEST, boolean, "q")
// for random units set boolean to true,
// overwrite key press by adding last parameter string (e.g "a")

// Random towers
//////////////////////////////////////////////////////////
// const unit = Object.values(towerSizeClass.unit)
// const getRandomUnit = unit => {
//   const ran = unit[Math.floor(Math.random() * unit.length)]
//   console.log(ran)
//   return ran
// }
// if (random) {
//   for (let i = 0; i < matrix.length; i++) {
//     const target = new Point(matrix[i].x, matrix[i].y)
//     ks.sendKey(getRandomUnit(unit))
//     await sleep(10)
//     await mouse.setPosition(target)
//     await mouse.leftClick()
//   }
// }
