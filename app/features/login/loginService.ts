import app = require('main/app');

export class LoginService {
    constructor(private $q : ng.IQService) {
        
    }
    
    checkPassword(user : string, password: string) : ng.IPromise<boolean>{
        //simulate server response time with $q:
        return this.$q( function(resolve) {
           setTimeout(()=> resolve( user == 'rafa' && password == '123'), 1000); 
        });
    }
    
}

app.service(LoginService);

export = LoginService;