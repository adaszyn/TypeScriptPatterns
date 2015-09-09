import {myModule} from "./my_module"
import {CarModule} from "./builder/CarModule"
myModule();
var carSalesman = new CarModule.CarSalesman();
var pussyWagonBuilder = new CarModule.PussyWagonBuilder();
carSalesman.carBuilder = pussyWagonBuilder;
carSalesman.constructCar();
var car = carSalesman.getCar();
console.log(car);

