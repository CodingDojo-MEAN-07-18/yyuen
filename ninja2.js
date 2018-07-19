function Ninja(name){

    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    Ninja.prototype.sayName = function(){
        console.log("My ninja name is " + this.name + "!");
        return this;
    }
    Ninja.prototype.showStats = function(){
        console.log("Name: " + this.name + ", Health:" + this.health + ", Speed:" + speed + ", Strength:" + strength);
    }
    Ninja.prototype.drinkSake = function(){
        this.health += 10;
    }

    Ninja.prototype.punch = function(ninja){
        this.health -= 5;
        console.log( + ", was punched by" + redNinja + "and lost 5 health!")
    }

    Ninja.prototype.kick = function(ninja){
        const damage = 15* blueNinja.strength; 
        console.log(redNinja + ", was kicked by" + blueNinja + "and lost" + damage + " health!");
    }

}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
    redNinja.punch(blueNinja);