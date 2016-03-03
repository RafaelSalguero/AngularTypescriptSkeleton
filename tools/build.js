//Run this file with node to build the project
//The main function of this file is to run all the autoreq for generating requireme.ts files

//exec: takes an array of console commands and executes synchronously
var exec = (x) => x.forEach(y=> { 
    var r = require('child_process').execSync(y, {encoding: "utf8" } ); if (r != null && r != "") console.log(r);
});
exec([
    //generate requires for polyfills:
    'node node_modules\\autoreq\\autoreq.js *.js app app\\polyfills\\requireme.ts app\\polyfills',
    //generate requires for all requireme files:
    'node node_modules\\autoreq\\autoreq.js requireme.ts app app\\main\\requireme.ts app',
    'tsc',
    'echo build ok'
    ]);