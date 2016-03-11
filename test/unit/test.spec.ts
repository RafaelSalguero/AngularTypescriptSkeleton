import loginService =require("unit/hola");
 
describe("a suite", function() {
   it("should be 10",  ()=> 
   {
      expect(loginService).toBe(10); 
   });
});

