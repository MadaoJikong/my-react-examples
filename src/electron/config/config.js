//dev 开发， release 发布，
let _env = "dev";
let _serviceIp = "localhost";
let _port = 3000;
let _protocol = "http";
let _baseUrl = _protocol + "://" + _serviceIp + ":" + _port;

let config = {
    env: _env,
    serviceIp: _serviceIp,
    port: _port,
    protocol: _protocol,
    baseUrl: _baseUrl
};

module.exports = config

