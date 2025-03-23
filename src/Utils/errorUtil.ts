export class customError extends Error {
    statusCoode: number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCoode = statusCode;
    }
}

export class BadRequestError extends customError {
    constructor(message: string) {
        super(message, 400);
    }
}

export class NotFoundError extends customError {
    constructor(message: string) {
        super(message, 404);
    }
}

export class UnauthorizedError extends customError {
    constructor(message: string) {
        super(message, 401)
    }
}