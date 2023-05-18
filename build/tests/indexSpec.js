"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import myFunc from "../index";
var car_1 = require("../car");
var student_1 = require("../student");
// describe("first unit with TS", ()=>{
//      it("multi func", ()=>{
//          expect(myFunc(5)).toEqual(25);
//      })
// })
var carValue = (0, car_1.car)(0);
var speedValue = 0;
afterEach(function () {
    carValue = (0, car_1.car)(speedValue);
});
describe("Tests for the cars", function () {
    it("Less than 0", function () {
        expect(carValue).toEqual("Invalid");
        speedValue = 20;
    });
    it("0 <= Speed < 40", function () {
        expect(carValue).toEqual("Level shall be Low");
        speedValue = 50;
    });
    it("40 <= Speed < 120", function () {
        expect(carValue).toEqual("Level shall be Normal");
        speedValue = 170;
    });
    it("120 <= Speed < 200", function () {
        expect(carValue).toEqual("Level shall be High");
        speedValue = 210;
    });
    it("200 <= Speed < 220", function () {
        expect(carValue).toEqual("Level shall be High");
        speedValue = 260;
    });
    it("220 <  Speed ", function () {
        expect(carValue).toBe("Level shall be Invalid");
    });
});
describe("Tests for the Students", function () {
    it("Less than 0", function () {
        expect((0, student_1.student)(-1)).toEqual("Level shall be Invalid");
    });
    it("0 <= Score < 50", function () {
        expect((0, student_1.student)(40)).toEqual("Level shall be Failed");
    });
    it("50 <= Score < 65 ", function () {
        expect((0, student_1.student)(55)).toEqual("Level shall be Passed");
    });
    it("65 <= Score < 75", function () {
        expect((0, student_1.student)(70)).toEqual("Level shall be Good");
    });
    it("75 <= Score < 85", function () {
        expect((0, student_1.student)(80)).toEqual("Level shall be V.Good");
    });
    it("85 <= Score < 100", function () {
        expect((0, student_1.student)(90)).toEqual("Level shall be Excellent");
    });
    it("100 <  Score", function () {
        expect((0, student_1.student)(110)).toEqual("Level shall be In");
    });
});
