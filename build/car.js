"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.car = void 0;
var car = function (speed) {
    if (speed <= 0) {
        return "Invalid";
    }
    if (speed <= 40) {
        return "Level shall be Low";
    }
    if (speed <= 120) {
        return "Level shall be Normal";
    }
    if (speed <= 220) {
        return "Level shall be High";
    }
    return "Level shall be Invalid";
};
exports.car = car;
