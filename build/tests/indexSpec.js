"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
describe("first unit with TS", function () {
    it("multi func", function () {
        expect((0, index_1.default)(5)).toEqual(25);
    });
});
