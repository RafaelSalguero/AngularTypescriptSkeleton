//Run this file with node to deploy the project app_build and app_build_min

//exec: takes an array of console commands and executes synchronously
var exec = (x) => x.forEach(y => {
    var r = require('child_process').execSync(y, { encoding: "utf8" }); if (r != null && r != "") console.log(r);
});
var now = new Date();
var version = now.getFullYear().toString()
    + "_" + (now.getMonth() + 1).toString()
    + "_" + now.getDate().toString()
    + "_" + now.getHours().toString()
    + "_" + now.getMinutes().toString()
    + "_" + now.getSeconds().toString();

exec([
    //Delete the directory if already existed
    "rmdir app_build /S /Q & echo ok",
    "rmdir app_build_min /S /Q & echo ok",

    //Create output directory
    'mkdir app_build',

    //Copy all files except node modules
    'robocopy "." "./app_build" /XD "node_modules" /XD "app_build" /XD ".git" /XF *.ts /S & echo ok',

    //Replace application.version from app/config.js, since r.js does not allow variables on this file
    'node node_modules/replace/bin/replace.js "application.version" ' + '"\'' + version + '\'" app_build/app/config.js',

    //Install only production node packages
    'cd app_build && npm i --production --global-style && cd ..',

    //Minification
    "node node_modules/requirejs/bin/r.js -o app_build/app/app.build.js"
]);