import {myModule} from "./my_module"
import {CarModule} from "./builder/CarModule"
import {Singleton} from "./singleton/Singleton"
import {PizzaModule} from "./factoryMethod/PizzaModule"
myModule();
var carSalesman = new CarModule.CarSalesman();
var pussyWagonBuilder = new CarModule.PussyWagonBuilder();
carSalesman.carBuilder = pussyWagonBuilder;
carSalesman.constructCar();
var car = carSalesman.getCar();
var riri = new Singleton.Rihanna();
try {
	var riri2 = new Singleton.Rihanna();
}
catch (error) {
	console.log('Exception thrown!');
}
// console.log(riri.needs());
// console.log(riri2.needs());

var PizzaFactory = new PizzaModule.HawaiianPizzaFactory();
var pizza = PizzaFactory.getPizza();
console.log(pizza.getType());