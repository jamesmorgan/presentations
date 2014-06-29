define(["./arrays-utils.js"], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  "use strict";
  var $__1 = $traceurRuntime.assertObject($__0),
      merge = $__1.merge,
      uppercaseArray = $__1.uppercaseArray;
  var app = {
    firstArray: ["jimmy", "jammy", "bobbins"],
    secondArray: ["timmy", "tammy", "tommy"],
    mergedArray: merge(app.firstArray, app.secondArray),
    uppercaseArrays: uppercaseArray(app.mergedArray)
  };
  console.log(app.mergedArray);
  console.log(app.uppercaseArrays);
  var $__default = app;
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
