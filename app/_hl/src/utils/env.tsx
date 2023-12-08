const ENV = process.env.NODE_ENV
const PROTOCOL = process.env.REACT_APP_SECURE === "true" ? "https" : "http";
const HOST = process.env.REACT_APP_HOSTNAME
const SERVER_PORT = process.env.REACT_APP_SERVER_PORT
const DEV_ORIGIN = `${PROTOCOL}://${HOST}:${SERVER_PORT}`
const PROD_ORIGIN = window.location.origin
const ORIGIN = ENV === "development" || ENV === "test" ? DEV_ORIGIN : PROD_ORIGIN

export {
    ORIGIN
}