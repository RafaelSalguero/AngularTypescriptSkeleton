
//add more main dependencies here:
import 'main/autoreq';

import app = require('main/app');


console.log("main run");

var container = "container"; 
angular.bootstrap( document.getElementById(container), [ app.app.name ]);

//Explicity export 'app' so the typescript compiler output a module definition
export = app;