import myFunc from "../index";

describe("first unit with TS", ()=>{
     it("multi func", ()=>{
         expect(myFunc(5)).toEqual(25);
     })
})