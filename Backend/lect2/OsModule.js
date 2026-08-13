const os = require("os");

console.log("Platform:", os.platform());

console.log("Architecture:", os.arch());

console.log("CPU:", os.cpus());

console.log("Hostname:", os.hostname());

console.log("Home Directory:", os.homedir());

console.log(
    "Total RAM:",
    (os.totalmem() / (1024 ** 3)).toFixed(2),
    "GB"
);

console.log(
    "Free RAM:",
    (os.freemem() / (1024 ** 3)).toFixed(2),
    "GB"
);

console.log(
    "System Uptime:",
    (os.uptime() / 3600).toFixed(2),
    "Hours"
);