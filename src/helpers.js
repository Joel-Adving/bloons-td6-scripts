'use strict'
import robot from 'robotjs'
import { windowManager } from 'node-window-manager'
import { BOTTOM_RIGHT_SCREEN_COORDS } from './config.js'
// import ioHook from 'iohook'

// export const killSwitch = function () {
//   ioHook.on('keydown', key => {
//     console.log(key.keycode)
//     if (key.ctrlKey && key.keycode === 46) {
//       process.abort()
//     }
//   })
//   ioHook.start()
// }

export const setWindowFocus = title =>
    windowManager
        .getWindows()
        .find(win => win.getTitle().toLocaleLowerCase() === title.toLocaleLowerCase())
        .bringToTop()

export const wait = milSecons =>
    new Promise(resolve => {
        setTimeout(resolve, milSecons)
    })

export const altTab = function () {
    robot.keyToggle('tab', 'down', 'alt')
    robot.keyToggle('tab', 'up', 'alt')
}

export const mouseTo = coords => robot.moveMouse(coords?.x, coords?.y)

export const click = (str = 'left') => robot.mouseClick(str)

export const ranNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const ranPixelCoords = (topLeft, bottomRight) => ({
    x: ranNum(bottomRight.x, topLeft.x),
    y: ranNum(bottomRight.y, topLeft.y),
})

export const random = () => Math.random() > 0.5

export const createMatrix = function (unit) {
    const rows = Math.floor(BOTTOM_RIGHT_SCREEN_COORDS.x / unit.width)
    const cols = Math.floor(BOTTOM_RIGHT_SCREEN_COORDS.y / unit.height)
    const startPoint = Object.create(unit)

    const initX = startPoint.startingCoords.x
    const initY = startPoint.startingCoords.y

    let x = initX
    let y = initY
    let first = true

    return Array(rows * cols + rows)
        .fill('')
        .map(_ => {
            if (x >= BOTTOM_RIGHT_SCREEN_COORDS.x) {
                x = initX
            }
            if (y >= BOTTOM_RIGHT_SCREEN_COORDS.y) {
                y = initY
            }
            if (first) {
                first = false
                return { x: x, y: y }
            }

            return {
                x: (x += unit.width),
                y: (y += unit.height),
            }
        })
}
