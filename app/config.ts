//Configure requireJS shim dependencies here
console.log("config run");
require.config(
    {
        baseUrl : "/app",
        deps: ["main"]      
    }
);