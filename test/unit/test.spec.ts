import loginService =require("app/features/login/loginService");
 
describe("a suite", function() {
   it("contains spec with an expectation", function () {
       expect(true).toBe(true);
   }) 

   angular.mock.module("app");
   angular.mock.inject(function ($Q: ng.IQService) 
   {
      console.log ($Q); 
   });
});

