
export default class ApiError extends Error {

    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
        if (!this.stack) this.stack = new Error().stack;
        if (process.env.PRODUCTION) this.stack = undefined;
    }

}