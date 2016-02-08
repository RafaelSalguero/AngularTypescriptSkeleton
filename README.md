##DO NOT USE ME YET
This proyect is isn't finished or ready

##Angular + Typescript + RequireJS skeleton ❤❤
###Easily starting up large-scale angular projects.

This project is built from the ground up to be 
**as minimal as posible**, while still be applicable to **large scale applications**

Thus, the following design decisions have been made:  

- **Folder structrure** *Feature based* instead of *type based* in order to scale well for large applications.
- **Tasks** `npm scripts` instead of `grunt` or other tasks runner eliminates an innecesary abstraction layer
- **Routing** included using  `ui.routing`

 
**Recomended setup**
- Windows
- Visual studio code


**External dependencies**

- **NPM** - Node package manager
- **Typescript** Install it using `npm install typescript -g`
- **Typings** Type script definitions manager. Install it using `npm install typings -g`
- **http-server** Used for serving the page. Install it using `npm install http-server -g`

###Running the app:

- Transpile Typescript running the `task watch` on VSCode task or `npm run watch` on the console
- Serve the page running the `task serve` on VSCode task or `npm run serve` on the console 
    - **Note: ** run `npm run serve` on a diferent console window to not interrupt the `watch` task
- Enter to `localhost:8080` on your browser 

##Structure overview:
- The folder structure is designed to be **minimal** and to have many **small 
script files for every task and feature** instead of a few monolithic files
```
app
  |--features
     |--login
        |--login.html
        |--login.ts
     |-- other features...
  |--main
     |--main.ts
     |--router.ts
  |--utils
  |--config.ts
index.html
```

- **`features` folder**
    - This is where your views (*partials*) and your controllers are hosted
    - Typically each feature is a folder with a single view and a single controller

- **`main` folder**
    - `main.ts` contains the code that bootstrap your app. You should not modify this file
    - `router.ts` configure your ui-router states here
- **`config.ts` file**
    - Contains `shim` dependencies in order to load libraries that doesn't implement AMD/requirejs such as AngularJS
    - Depends on `main/main` so that when this file is loaded, `main.ts` is executed 
###Install a new typing
- Search the typing on name on DefinitelyTyped
- Enter `typings install library_name --ambient`