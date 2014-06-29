define([], function() {
  "use strict";
  "use strict";
  function merge(firstArray, secondArray) {
    return firstArray.concat(secondArray);
  }
  function uppercaseArray(stringArray) {
    return stringArray.map((function(a) {
      return a.toUpperCase();
    }));
  }
  function evens(array) {
    return array.filter((function(i) {
      return (i % 2 === 0);
    }));
  }
  var Logger = function Logger() {
    var name = arguments[0] !== (void 0) ? arguments[0] : 'logger';
    var printDate = arguments[1] !== (void 0) ? arguments[1] : false;
    this.name = name;
    this.printDate = printDate;
  };
  ($traceurRuntime.createClass)(Logger, {
    debug: function(msg) {
      this.printMsg('debug', msg);
    },
    info: function(msg) {
      this.printMsg('info', msg);
    },
    warn: function(msg) {
      this.printMsg('warn', msg);
    },
    error: function(msg) {
      this.printMsg('error', msg);
    },
    printMsg: function(fnc, msg) {
      if (this.printDate) {
        console[$traceurRuntime.toProperty(fnc)](("[" + this.date() + "] [" + this.name + "] " + msg));
      } else {
        console[$traceurRuntime.toProperty(fnc)](("[" + this.name + "] " + msg));
      }
    },
    date: function() {
      return moment().format('llll');
    }
  }, {});
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
    get Logger() {
      return Logger;
    },
    __esModule: true
  };
});
