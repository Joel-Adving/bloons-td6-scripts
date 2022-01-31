'use strict'
import robot from 'robotjs'
import { wait, setWindowFocus, mouseTo, click } from '../helpers.js'

import {
    OPEN_POWERS_BTN,
    POWER_ICON_MONEY,
    POWER_ICON_TACKS,
    OUTSIDE_POWERS_TAB,
} from '../config.js'

export const spamPower = async function (power = POWER_ICON_MONEY, amount = 30, delayMs = 130) {
    setWindowFocus('bloonstd6')
    mouseTo(OUTSIDE_POWERS_TAB)
    click()
    await wait(35)
    mouseTo(OPEN_POWERS_BTN)
    click()
    await wait(500)
    mouseTo(power.icon)

    for (let i = 0; i < amount; i++) {
        // 130 if playing at normal speed, 35 for sped up
        await wait(delayMs)
        robot.mouseToggle('down', 'left')
        mouseTo(power.target)
        robot.mouseToggle('up', 'left')
        mouseTo(power.icon)
    }
    mouseTo(power.target)
    await wait(500)
    mouseTo(OPEN_POWERS_BTN)
    click()
}

spamPower(POWER_ICON_TACKS, 35, 35)
