
class Animal {

    constructor(){
        this.type = "Animal";
        this.colour = "Brown";
        this.size = "Medium";
    }

    // Method Definition Shorthand
    sound() {
        return "Sqeak";
    }

//    var sound = function() {
//        return "Sqeak!";
//    }

    move() {
        return "Running";
    }

    toString() {
        // Demonstration of String templating, this is possible with CoffeeScript and libraries such as handlebar.js, angular bindings etc
        return `The ${this.size} ${this.colour} ${this.type} can ${this.sound()} and ${this.move()}`;
    }
}

class Bird extends Animal {

    // Implicit constructor that itself has an implicit super call if not specified
    constructor(colour, size = "Tiny") {
        this.type = "Bird";
        this.colour = colour;
        this.size = size;
    }

    sound() { return "Cheep"; }

    move() { return "Flap" }
}

class Dog extends Animal {

    constructor(colour, size, type = "Dog") {
        this.type = type;
        this.colour = colour;
        this.size = size;
    }

    sound() { return "Woof"; }
}

class Labrador extends Dog {

    constructor(colour, size) {
        super(colour, size, "Labrador")
    }

    move() { return "Sprint"; }

    sound() { return "Bark"; }
}
