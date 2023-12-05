// ANSI CODE
const RESET = '\x1b[0m'
const BOLD = '\x1b[1m'
const ITALIC = '\x1b[3m'
const UNDERLINE = '\x1b[4m'
const STRIKETHROUGH = '\x1b[9m'
const RED = '\x1b[31m'
const GREEN = '\x1b[32m'
const YELLOW = '\x1b[33m'
const REDBG = '\x1b[41m'
const GREENBG = '\x1b[42m'
const YELLOWBG = '\x1b[43m'

const boldRed = (text: string) => {
    return `${BOLD}${RED}${text}${RESET}`;
}
const boldGreen = (text: string) => {
    return `${BOLD}${GREEN}${text}${RESET}`;
}
const boldYellow = (text: string) => {
    return `${BOLD}${YELLOW}${text}${RESET}`;
}

export {
    boldRed,
    boldGreen,
    boldYellow,
}