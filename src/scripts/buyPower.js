'use strict'
import { ADD_FOR_BTN } from '../config.js'
import { click, setWindowFocus, mouseTo } from '../helpers.js'

const buyPower = function (amount) {
    setWindowFocus('bloonstd6')
    mouseTo(ADD_FOR_BTN)
    for (let i = 0; i < amount; i++) {
        click('left')
    }
}

buyPower(500)
