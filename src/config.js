// MIN_SCREEN is the very top left pixel of bloons window in full screen 1080p
// MIN_SCREEN is the same but top right pixel
/////////////////////////////

// export const TOP_LEFT_SCREEN_COORDS = { x: 59, y: 25 }
// export const BOTTOM_RIGHT_SCREEN_COORDS = { x: 1612, y: 1052 }
export const TOP_LEFT_SCREEN_COORDS = { x: 59, y: 25 }
export const BOTTOM_RIGHT_SCREEN_COORDS = { x: 1612, y: 1052 }

// Other buttons
//////////////////////////////
export const OPEN_POWERS_BTN = { x: 1712, y: 1016 }
export const OUTSIDE_POWERS_TAB = { x: 1615, y: 364 }
export const ADD_FOR_BTN = { x: 1526, y: 971 }

// Powers icons
///////////////////////////////
export const POWER_ICON_FARMER = { x: 1819, y: 342 }
export const POWER_ICON_SUPER_STORM = { x: 1715, y: 167 }
export const POWER_ICON_MONEY = {
    icon: { x: 1711, y: 385 },
    target: { x: 1615, y: 364 },
}
export const POWER_ICON_POOL = { x: 1819, y: 718 }
export const POWER_ICON_TACKS = {
    icon: { x: 1819, y: 497 },
    target: { x: 79, y: 550 },
}

// Units
//////////////////////////////
export const FARMER_BEGINNING = { x: 1616, y: 1054 }
export const FARMER = { height: 48, width: 53 }
export const FARMER_HEIGHT = 48
export const FARMER_WIDTH = 53

export const MONKEY_BEGINNING_X_AXIS = 1580
export const MONKEY_BEGINNING = { x: 1580, y: 1053 }
export const MONKEY = { height: 57, width: 65 }
export const MONKEY_HEIGHT = 57
export const MONKEY_WIDTH = 65

export const DART_MONKEY = {
    maxCoords: { x: 1580, y: 1053 },
    maxCoordsX: 1580,
    minCoordsX: 58,
    startingCoords: { x: 58, y: 25 },
    height: 57,
    width: 65,
    key: 'Q',
}

export const BANANA_FARM = {
    maxCoords: { x: 1558, y: 1010 },
    maxCoordsX: 1563,
    minCoordsX: 208,
    startingCoords: { x: 208, y: 67 },
    height: 141,
    width: 162,
    key: 'H',
}

export const UNIT_SMALLEST = {
    maxCoords: { x: 1580, y: 1053 },
    maxCoordsX: 1580,
    // maxCoords: { x: 1500, y: 1053 },
    // maxCoordsX: 1500,
    minCoordsX: 58,
    startingCoords: { x: 58, y: 25 },
    height: 57,
    width: 65,
    // width: 70,
    unit: {
        dartMonkey: 'q',
        tackShooter: 'r',
        iceMonkey: 't',
        glueGunner: 'y',
        sniperMonkey: 'z',
        ninjaMonkey: 'd',
        alchemist: 'f',
    },
}
