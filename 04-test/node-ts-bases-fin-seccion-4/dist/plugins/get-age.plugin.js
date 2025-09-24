"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAge = (birthdate) => {
    // return getAgePlugin(birthdate);
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
exports.getAge = getAge;
