define([], function() {
  "use strict";
  "use strict";
  function merge(firstArray, secondArray) {
    return firstArray.concat(secondArray);
  }
  function uppercaseArray(stringArray) {
    return stringArray.forEach((function(a) {
      return a.toUpperCase();
    }));
  }
  function evens(array) {
    return array.filter((function(i) {
      return (i % 2 === 0);
    }));
  }
  return {
    get merge() {
      return merge;
    },
    get uppercaseArray() {
      return uppercaseArray;
    },
    get evens() {
      return evens;
    },
    __esModule: true
  };
});
