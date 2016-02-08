##DO NOT USE ME YET
This proyect is isn't finished or ready

##Angular + Typescript + RequireJS skeleton ❤❤
###Easily starting up angular projects.

This project is built from the ground up to be 
**as minimal as posible**, while still be applicable to **large scale applications**

Thus, the following design decisions have been made:  

- **Folder structrure** *Feature based* instead of *type based* in order to scale well for large applications.
- **Tasks** `npm scripts` instead of `grunt` or other tasks runner eliminates an innecesary abstraction layer
- **Routing** uncluded routing using  `ui.routing`

 
**Recomended setup**
- Windows
- Visual studio code


**External dependencies**

- **NPM** - Node package manager
- **Typescript** Install it using `npm install typescript -g`
- **Typings** Type script definitions manager. Install it using `npm install typings -g`
- **http-server** Used for serving the page. Install it using `npm install http-server -g`

###Testing the app:

- Transpile Typescript running the `task watch` on VSCode task or `npm run watch` on the console
- Serve the page running the `task serve` on VSCode task or `npm run serve` on the console 
- Enter to `localhost:8080` on your browser 

###Install a new typing
- Search the typing on name on DefinitelyTyped
- Enter `typings install library_name --ambient`