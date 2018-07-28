class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`Name: ${this.name}`);
        return this
    }

    showStats(){
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
        return this
    }
    drinkSake(){
        this.health += 10;
        return this
    }
}

const ninja1 = new Ninja("Hayson");
ninja1.sayName().drinkSake().showStats();

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        super.showStats();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const sensei = new Sensei("Master Splinter");
sensei.drinkSake().speakWisdom().showStats();