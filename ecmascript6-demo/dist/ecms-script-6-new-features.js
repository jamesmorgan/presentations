define([], function() {
  "use strict";
  "use strict";
  var $__5 = $traceurRuntime.initGeneratorFunction(count);
  var helloWorld = function helloWorld() {
    var alterText = arguments[0] !== (void 0) ? arguments[0] : "Jimbob";
    return (alterText + " says hello!");
  };
  console.log(helloWorld());
  console.log(helloWorld("Jammy"));
  var c = new Bird("Red");
  console.log(c.toString());
  var d = new Dog("Black", "Medium");
  console.log(d.toString());
  var p = new Labrador("Brown", "Big");
  console.log(p.toString());
  var binary = [0, 1, 3];
  console.log(("Binary: " + binary));
  var octal = [0, 1, 8, 63];
  console.log(("Octal: " + octal));
  var changable = "Don't be stupid!";
  {
    try {
      throw undefined;
    } catch (UNCHANGEBALE) {
      changable = "this throws an error!";
      UNCHANGEBALE = "Cant touch this!";
      UNCHANGEBALE = changable;
      console.log(UNCHANGEBALE);
    }
  }
  var a = "smalls";
  {
    try {
      throw undefined;
    } catch (a) {
      a = "biggy";
      console.log(a);
    }
  }
  console.log(a);
  function makeIterator(array) {
    var nextIndex = 0;
    return {next: function() {
        return nextIndex < array.length ? {
          value: array[$traceurRuntime.toProperty(nextIndex++)],
          done: false
        } : {done: true};
      }};
  }
  var it = makeIterator(["yo", "ya"]);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().done);
  function count() {
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            $ctx.state = 2;
            return 1;
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 4;
            break;
          case 4:
            $ctx.state = 6;
            return 2;
          case 6:
            $ctx.maybeThrow();
            $ctx.state = 8;
            break;
          case 8:
            $ctx.state = 10;
            return 3;
          case 10:
            $ctx.maybeThrow();
            $ctx.state = -2;
            break;
          default:
            return $ctx.end();
        }
    }, $__5, this);
  }
  var counter = count();
  console.log(counter.next());
  console.log(counter.next());
  console.log(counter.next());
  console.log(counter.next());
  var numbers = [1.5, 6, 8.5, 12];
  var doubled = (function() {
    var $__0 = 0,
        $__1 = [];
    for (var $__2 = numbers[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__3; !($__3 = $__2.next()).done; ) {
      try {
        throw undefined;
      } catch (i) {
        i = $__3.value;
        $traceurRuntime.setProperty($__1, $__0++, i * 2);
      }
    }
    return $__1;
  }());
  console.log(doubled);
  var alternative = numbers.map((function(i) {
    return i * 2;
  }));
  console.log(alternative);
  var evens = numbers.filter((function(i) {
    return i % 2 === 0;
  }));
  console.log(evens);
  var a1 = [1];
  var b1 = [2, 3, 4];
  var c1 = [6, 7];
  var d1 = $traceurRuntime.spread([0], a1, b1, [5], c1);
  console.log(d1);
  var d2 = [0].concat(a1).concat(b1).concat([5]).concat(c1);
  console.log(d2);
  function varargs(x) {
    for (var rest = [],
        $__4 = 1; $__4 < arguments.length; $__4++)
      $traceurRuntime.setProperty(rest, $__4 - 1, arguments[$traceurRuntime.toProperty($__4)]);
    return rest.length;
  }
  console.log(varargs("a", 1, 2, 3, 4, 5, 6));
  console.log(varargs("a"));
  var s = new Set([1, 3, 4, 2, 3, 2, 17, 17, 1, 17]);
  console.log(s);
  var m = new Map();
  console.log(m.size);
  m.set("a", 1);
  m.has("a");
  m.get("a");
  console.log(m.size);
  m.delete("a");
  console.log(m.size);
  var colours = ["red", "blue"];
  colours.createDate = Date.now();
  for (var $name in colours) {
    try {
      throw undefined;
    } catch (name) {
      name = $name;
      console.log(name);
    }
  }
  for (var $__2 = colours[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__3; !($__3 = $__2.next()).done; ) {
    try {
      throw undefined;
    } catch (word) {
      word = $__3.value;
      {
        console.log(word);
      }
    }
  }
  return {};
});
