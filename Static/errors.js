
export class IpRangeError extends Error {

    message;
    stack;
    name;

    constructor (name, message) {
        this.message = message;
        this.name = name;
    } 
}