//dev 开发，release 发布，
let _env = "dev";
let _serviceIp = "localhost";
let _port = 3000;
let _protocol = "http";
let _baseUrl = _protocol + "//" + _serviceIp + ":" + _port;

let _config = {
    env: _env,
    serviceIp: _serviceIp,
    port: _port,
    protocol: _protocol,
    baseUrl: _baseUrl
};
export const config = _config;
export const env = _env;
export const serviceIp = _serviceIp;
export const baseUrl = _baseUrl;