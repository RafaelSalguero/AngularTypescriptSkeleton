import 'angular-mocks'
import loginService =require("app/features/login/loginService");
//Force the import of the login service:
loginService;

describe("login test", function() {
    beforeEach(angular.mock.module("app"));
    
   it("angular defined",  ()=> 
   {
      expect(angular).toBeDefined(); 
   });
   
     it("ng mock defined",  ()=> 
   {
      expect(inject).toBeDefined(); 
   });
   
    it("loginService defined",  ()=> 
   {
      expect(loginService).toBeDefined(); 
   });
   
   it ("correct password passes", inject(function(LoginService : loginService, $q: ng.IQService, $rootScope : ng.IRootScopeService, $timeout : ng.ITimeoutService) {
       //Testing a $Q promise
       
       //The password service resolves its value after 1 second. Here we are mocking the timeout service and simulating the time passing
       var resolvedValue;
       var promise = LoginService.checkPassword("rafa","123").then( x=> resolvedValue = x);
       //Promise has not been resolved yet:
       expect(resolvedValue).toBeUndefined();
       
       $rootScope.$apply();
       //Promise has not been resolved yet:
       expect(resolvedValue).toBeUndefined();

       $timeout.flush(500);       
       $rootScope.$apply();
       //Promise has not been resolved yet:
       expect(resolvedValue).toBeUndefined();
       
       $timeout.flush(500);       
       $rootScope.$apply();
       
       //After one seconds, the promise has been resolved:
       expect(resolvedValue).toBe(true);
       
   }));
   
   it("wrong password fails", inject(function (LoginService: loginService, $q : ng.IQService , $rootScope : ng.IRootScopeService, $timeout : ng.ITimeoutService){
       var resolvedValue;
       var promise = LoginService.checkPassword("rafa","wrong").then( x=> resolvedValue = x);
       
       //Simulate one second passing:
       $timeout.flush(1000);
       $rootScope.$apply();
       
       //wrong password fails
       expect(resolvedValue).toBe(false);
   }));
   
//    it("correct password passes", inject(function(LoginService : loginService){
//       expect(LoginService.checkPassword("rafa", "123")).toBe(true); 
//    }));
});

