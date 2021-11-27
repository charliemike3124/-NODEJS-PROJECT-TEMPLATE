const TIMES = {
    SECOND: 1000,
    MINUTE: 60000,
    HOUR: 3600000
}

const ALIVE_TIMES = {
    VOLATILE: TIMES.SECOND/5,
    SHORT: TIMES.SECOND,
    MEDIUM: TIMES.MINUTE,
    LONG: TIMES.HOUR,
    HIGHEST: TIMES.HOUR*24,
}

module.exports = {
    ALIVE_TIMES,
}