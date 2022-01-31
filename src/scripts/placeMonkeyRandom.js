'use strict'
import robot from 'robotjs'
import { wait, getWindow, mouseTo, click, ranPixelCoords, random } from '../helpers.js'
import {
    BOTTOM_RIGHT_SCREEN_COORDS,
    TOP_LEFT_SCREEN_COORDS,
    MONKEY_WIDTH,
    MONKEY_HEIGHT,
    MONKEY_BEGINNING_X_AXIS,
} from '../config.js'

const topLeft = TOP_LEFT_SCREEN_COORDS
const bottomRight = BOTTOM_RIGHT_SCREEN_COORDS

export const placeMonkeyRandomV2 = async function (
    amount,
    {
        key = 'Q',
        startingUnitCoords = MONKEY_BEGINNING_X_AXIS,
        unitWidth = MONKEY_WIDTH,
        unitHeight = MONKEY_HEIGHT,
    }
) {
    getWindow('bloonstd6')

    const placedMonkeys = []

    await wait(100)
    robot.keyToggle(key, 'down')
    mouseTo(ranPixelCoords(topLeft, bottomRight))
    click()

    for (let i = 0; i < amount; i++) {
        const newPixel = ranPixelCoords(topLeft, bottomRight)
        mouseTo(newPixel)
        click()

        if (placedMonkeys.some(el => newPixel.x >= el.x.x1 && newPixel.x <= el.x.x2)) {
            random() && newPixel.x < startingUnitCoords - unitWidth
                ? random()
                    ? (newPixel.x += unitWidth)
                    : (newPixel.x -= unitWidth)
                : random()
                ? (newPixel.y += unitHeight)
                : (newPixel.y -= unitHeight)
        }

        placedMonkeys.push({
            x: { x1: newPixel.x, x2: newPixel.x + unitWidth },
            y: { y1: newPixel.y, y2: newPixel.y + unitHeight },
        })

        mouseTo(newPixel)
        click()
    }
    robot.keyToggle(key, 'up')
    robot.keyTap('escape')
}

placeMonkeyRandomV2(200, { key: 'Q' })
