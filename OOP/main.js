class Car {
  constructor(name, color, speed) {
    console.log("Contructor");
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.price = 10000;
  }

  fullInfo() {
    console.log("Car name: ", this.name);
    console.log("Car color: ", this.color);
    console.log("Car speed: ", this.speed);
  }

  getName(role) {
    if (role == "seller") {
      return this.name;
    } else {
      return "No permission";
    }
  }

  setName(name) {
    this.name = name;
  }
}

const car = new Car("BMW", "red", 200); //object -> instance
const car2 = new Car("Benz", "yellow", 300);

// car.fullInfo();
// car2.fullInfo();

console.log("==================");
console.log(car.getName());
car.setName("Audi");
console.log(car.getName());
console.log("==================");
console.log(this);

class Bus extends Car {
  constructor(props) {
    super(props.name, props.color, props.speed);
    this.capacity = props.capacity;
  }

  //override
  fullInfo() {
    console.log("Car name: ", this.name);
    console.log("Car color: ", this.color);
    console.log("Car speed: ", this.speed);
    console.log("Car capacity: ", this.capacity);
  }
}

const b1 = new Bus({ name: "Hino", color: "yellow" });
const b2 = new Bus("Daewoo", "yellow", 1000, 40);

car.fullInfo();
b1.fullInfo();

const obj = {};
const obj2 = new Object();
