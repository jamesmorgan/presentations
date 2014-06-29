"use strict";

import {merge, uppercaseArray} from "./arrays-utils.js";

var app = {
    firstArray: ["jimmy", "jammy", "bobbins"],
    secondArray: ["timmy", "tammy", "tommy"],
    mergedArray: merge(app.firstArray, app.secondArray),
    uppercaseArrays: uppercaseArray(app.mergedArray)
};

console.log(app.mergedArray);
console.log(app.uppercaseArrays);

export default app;