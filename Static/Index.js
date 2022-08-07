class IpRangeError extends Error {

    message;
    stack;
    name;

    constructor (name, message) {
        this.message = message;
        this.name = name;
    } 
}


function grabIpAdress (ip) {
    if (!ip || typeof ip !== "string") {
        throw new IpRangeError ("IP_NOT_VALID", "ip is not a string");
    } 
    return ip;
}

console.log (
    grabIpAdress("CHINA")
)