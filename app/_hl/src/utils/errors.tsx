export enum ERROR_MESSAGE {
    INTERNAL_SERVER = 'Oops! We encountered an internal server error (Error Code: 500). Please try again later. If the problem persists, you can contact our support team for assistance or try refreshing the page.'
}

export const setError = (data: any, hook: Function) => {
    if (data) {
        hook(data.detail);
    }
    else {
        hook(ERROR_MESSAGE.INTERNAL_SERVER);
    }
}