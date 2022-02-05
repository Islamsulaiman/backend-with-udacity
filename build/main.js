"use strict";
var person;
person = "Rory";
var buildPerson = function (person) {
    return "your person is ".concat(person);
};
console.log(buildPerson(person));
