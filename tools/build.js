//Run this file with node to build the project
//The main function of this file is to run all the autoreq for generating requireme.ts files

//exec: takes an array of console commands and executes synchronously
var exec = (x) => x.forEach(y=> { 
    var r = require('child_process').execSync(y, {encoding: "utf8" } ); if (r != null && r != "") console.log(r);
});

var versionRegex =`application.version\\s*=\\s'\\S*'\\s*;\\s*//__version`;
var now = new Date();
var versionReplace =`application.version = '${now.toISOString()}'; //__version`;

var versionCmd = `node node_modules/replace/bin/replace.js "${versionRegex}" "${versionReplace}" Index.html`;

exec([
    //Copia el index_TEMPLATE.html al index, esto para evitar tener al index adentro del control de código,
    //ya que con cada compilación esta cambiando
    'COPY /Y "index_TEMPLATE.html" "index.html',
    //Reemplaza la versión del Index.html:
    versionCmd,
    
    //generate requires for polyfills:
    'node node_modules/autoreq/autoreq.js *.js . app\\polyfills\\requireme.ts app\\polyfills',
    //generate requires for all requireme files:
    'node node_modules/autoreq/autoreq.js requireme.ts . app\\main\\requireme.ts app'
    ]);