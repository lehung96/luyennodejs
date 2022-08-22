var access = require("fs/promises");

var constants = require("fs");

try{
    await access('/etc/passwd', constants.R_OK | constants.W_OK);
    console.log('can access');
}catch {
    console.log('cannot access');
}


