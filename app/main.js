System.register(["./my_module", "./builder/CarModule"], function(exports_1) {
    var my_module_1, CarModule_1;
    var carSalesman, pussyWagonBuilder, car;
    return {
        setters:[
            function (_my_module_1) {
                my_module_1 = _my_module_1;
            },
            function (_CarModule_1) {
                CarModule_1 = _CarModule_1;
            }],
        execute: function() {
            my_module_1.myModule();
            carSalesman = new CarModule_1.CarModule.CarSalesman();
            pussyWagonBuilder = new CarModule_1.CarModule.PussyWagonBuilder();
            carSalesman.carBuilder = pussyWagonBuilder;
            carSalesman.constructCar();
            car = carSalesman.getCar();
            console.log(car);
        }
    }
});
