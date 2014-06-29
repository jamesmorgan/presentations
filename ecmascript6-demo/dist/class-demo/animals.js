define([], function() {
  "use strict";
  var Animal = function Animal() {
    this.type = "Animal";
    this.colour = "Brown";
    this.size = "Medium";
  };
  ($traceurRuntime.createClass)(Animal, {
    sound: function() {
      return "Sqeak";
    },
    move: function() {
      return "Running";
    },
    toString: function() {
      return ("The " + this.size + " " + this.colour + " " + this.type + " can " + this.sound() + " and " + this.move());
    }
  }, {});
  var Bird = function Bird(colour) {
    var size = arguments[1] !== (void 0) ? arguments[1] : "Tiny";
    this.type = "Bird";
    this.colour = colour;
    this.size = size;
  };
  ($traceurRuntime.createClass)(Bird, {
    sound: function() {
      return "Cheep";
    },
    move: function() {
      return "Flap";
    }
  }, {}, Animal);
  var Dog = function Dog(colour, size) {
    var type = arguments[2] !== (void 0) ? arguments[2] : "Dog";
    this.type = type;
    this.colour = colour;
    this.size = size;
  };
  ($traceurRuntime.createClass)(Dog, {sound: function() {
      return "Woof";
    }}, {}, Animal);
  var Labrador = function Labrador(colour, size) {
    $traceurRuntime.superCall(this, $Labrador.prototype, "constructor", [colour, size, "Labrador"]);
  };
  var $Labrador = Labrador;
  ($traceurRuntime.createClass)(Labrador, {
    move: function() {
      return "Sprint";
    },
    sound: function() {
      return "Bark";
    }
  }, {}, Dog);
  return {};
});
