// import myFunc from "../index";
import { car } from "../car";
import { student } from "../student";

// describe("first unit with TS", ()=>{
//      it("multi func", ()=>{
//          expect(myFunc(5)).toEqual(25);
//      })
// })

let carValue = car(0);
let speedValue = 0 ;

afterEach(()=>{
    carValue = car(speedValue)
})

describe("Tests for the cars" ,()=>{
    it("Less than 0", ()=>{
        expect(carValue).toEqual("Invalid")
        speedValue = 20
    })
    it("0 <= Speed < 40", ()=>{
        expect(carValue).toEqual("Level shall be Low")
        speedValue = 50
    })
    it("40 <= Speed < 120", ()=>{
        expect(carValue).toEqual("Level shall be Normal")
        speedValue = 170
    })
    it("120 <= Speed < 200", ()=>{
        expect(carValue).toEqual("Level shall be High")
        speedValue = 210
    })
    it("200 <= Speed < 220", ()=>{

        expect(carValue).toEqual("Level shall be High")
        speedValue = 260
    })
    it("220 <  Speed ", ()=>{
        expect(carValue).toBe("Level shall be Invalid")
    })
    
})


describe("Tests for the Students" ,()=>{
    it("Less than 0", ()=>{
        expect(student(-1)).toEqual("Level shall be Invalid")
    })
    it("0 <= Score < 50", ()=>{
        expect(student(40)).toEqual("Level shall be Failed")
    })
    it("50 <= Score < 65 ", ()=>{
        expect(student(55)).toEqual("Level shall be Passed")
    })
    it("65 <= Score < 75", ()=>{
        expect(student(70)).toEqual("Level shall be Good")
    })
    it("75 <= Score < 85", ()=>{
        expect(student(80)).toEqual("Level shall be V.Good")
    })
    it("85 <= Score < 100", ()=>{
        expect(student(90)).toEqual("Level shall be Excellent")
    })
    it("100 <  Score", ()=>{
        expect(student(110)).toEqual("Level shall be In")
    })
})