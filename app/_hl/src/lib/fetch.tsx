import { ROUTE } from "../api/route";
import { ORIGIN } from "../utils/env";

/**
 * Sends a POST request to the specified URL with the provided JSON data.
*
* @param {ROUTE} endpoint - The endpoint to send the request to.
* @param {boolean} [dev=false] - Determines whether to use the development URL or the current window location as the base URL.
* @param {object} json - the JSON data to be sent in the request body
* @return {Promise<any>} - A Promise that resolves to the response data or rejects with an error.
*/
export const post = async (endpoint: ROUTE, json: object, dev: boolean = false): Promise<any> => {
    const url = new URL(endpoint, ORIGIN).href;
    try {
        const response = await fetch(url, {
            credentials: "include",
            method: "POST",
            body: JSON.stringify(json),
            headers: {
              "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
/**
 * Sends a GET request to the specified endpoint with the provided JSON data.
 *
 * @param {ROUTE} endpoint - The endpoint to send the request to.
 * @param {boolean} [dev=false] - Determines whether to use the development URL or the current window location as the base URL.
 * @return {Promise<any>} - A Promise that resolves to the response data or rejects with an error.
 */
export const get = async (endpoint: ROUTE, dev: boolean = false): Promise<any> => {
    const url = new URL(endpoint, ORIGIN).href;
    try {
        const response = await fetch(url, {
            credentials: "include",
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
