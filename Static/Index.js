import { IpRangeError } from "./errors";

console.log ("Hi");

function grabIpAdress (ip) {
    if (!ip || typeof ip !== "string") {
        throw new IpRangeError ("IP_NOT_VALID", "ip is not a string");
    } 
    return ip;
}

console.log (
    grabIpAdress("CHINA")
)