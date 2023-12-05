import { Response } from 'express';

enum HTTP {
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    OK = 200
}

type Message = {
    valid: boolean
    status?: number
    message: string
}

/**
 * Sends a response with the specified status and message.
 *
 * @param {Response} res - The response object.
 * @param {number} status - The status code of the response.
 * @param {string} message - The message to send in the response.
 * @return {void}
 */
const sendMessage = (res: Response, status: number, message: string) => {
    res.status(status).send({ message: message });
}

export {
    HTTP,
    Message,
    sendMessage
}