<<<<<<< HEAD
function Ninja(name){

    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    Ninja.prototype.sayName = function(){
        console.log("My ninja name is " + this.name + "!");
        
    }
    Ninja.prototype.showStats = function(){
        console.log("Name: " + this.name + ", Health:" + this.health + ", Speed:" + speed + ", Strength:" + strength);
    }
    Ninja.prototype.drinkSake = function(){
        this.health += 10;
    
    
    }
}

var ninja1 = new Ninja("Hyabusa");
   ninja1.sayName();
=======
function Ninja(name){

    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.sayName = function(){
        console.log("My ninja name is " + this.name + "!");
        return this;
    }
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health:" + this.health + ", Speed:" + speed + ", Strength:" + strength);
    }
    this.drinkSake = function(){
        this.health += 10;
    }
}

var ninja1 = new Ninja("Hyabusa");
   ninja1.sayName();
>>>>>>> 10228ef34a9069acc8b93b39bc26bf32b4fea877
   ninja1.showStats();