define([], function() {
  "use strict";
  var Greeter = function Greeter() {};
  ($traceurRuntime.createClass)(Greeter, {sayHi: function() {
      var name = arguments[0] !== (void 0) ? arguments[0] : 'Anonymous';
      console.log(("Hi " + name + "!"));
    }}, {});
  var greeter = new Greeter();
  greeter.sayHi();
  return {};
});
