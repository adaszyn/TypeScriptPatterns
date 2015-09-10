System.register(["./my_module", "./builder/CarModule", "./singleton/Singleton"], function(exports_1) {
    var my_module_1, CarModule_1, Singleton_1;
    var carSalesman, pussyWagonBuilder, car, riri, riri2, error;
    return {
        setters:[
            function (_my_module_1) {
                my_module_1 = _my_module_1;
            },
            function (_CarModule_1) {
                CarModule_1 = _CarModule_1;
            },
            function (_Singleton_1) {
                Singleton_1 = _Singleton_1;
            }],
        execute: function() {
            my_module_1.myModule();
            carSalesman = new CarModule_1.CarModule.CarSalesman();
            pussyWagonBuilder = new CarModule_1.CarModule.PussyWagonBuilder();
            carSalesman.carBuilder = pussyWagonBuilder;
            carSalesman.constructCar();
            car = carSalesman.getCar();
            riri = new Singleton_1.Singleton.Rihanna();
            try {
                riri2 = new Singleton_1.Singleton.Rihanna();
            }
            catch (error) {
            }
            console.log(riri.needs());
            console.log(riri2.needs());
        }
    }
});
