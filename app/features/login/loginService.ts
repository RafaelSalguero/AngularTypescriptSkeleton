import app = require('app/main/app');

class LoginService {
    constructor(private $q : ng.IQService, private $timeout : ng.ITimeoutService) {
        
    }
    
    checkPassword(user : string, password: string) : ng.IPromise<boolean>{
        //simulate server response time with $q:
        return this.$q( resolve => {
           this.$timeout(()=> resolve( user == 'rafa' && password == '123'), 1000); 
        });
    }
    
}

app.service(LoginService);

export = LoginService;