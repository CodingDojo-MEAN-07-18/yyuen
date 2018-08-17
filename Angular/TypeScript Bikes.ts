class Bike{
    miles: number;
    constructor(
        public price: number,
        public max_speed: string){
        this.miles = 0;
        }
    display_info = function () {
        return `Price: ${this.price} , Max Speed: ${this.max_speed}, Miles: ${this.miles}`
        return this;
    }
    ride = function() {
        return `Riding...`
        this.miles = + 10;
        return this;
    }
    reverse = function () {
        return `Reversing...`
        this.miles = -5;
        return this;
    }
}

var bike1 = new Bike(200, "25mph");
var bike2 = new Bike(600, "62mph");
var bike3 = new Bike(100, "22mph");

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().revserse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();