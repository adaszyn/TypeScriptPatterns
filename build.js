System.register("app/main.js", ["app/my_module.js", "app/builder/CarModule.js"], function(exports_1) {
  var my_module_1,
      CarModule_1;
  return {
    setters: [function(_my_module_1) {
      my_module_1 = _my_module_1;
    }, function(_CarModule_1) {
      CarModule_1 = _CarModule_1;
    }],
    execute: function() {
      my_module_1.myModule();
      console.log(CarModule_1.CarModule);
    }
  };
});

System.register("app/my_module.js", [], function(exports_1) {
  function myModule() {
    console.log("message from mymodule");
  }
  exports_1("myModule", myModule);
  return {
    setters: [],
    execute: function() {}
  };
});

System.register("app/builder/CarModule.js", [], function(exports_1) {
  var CarModule;
  return {
    setters: [],
    execute: function() {
      (function(CarModule) {
        var Color;
        (function(Color) {
          Color[Color["Blue"] = 0] = "Blue";
          Color[Color["Red"] = 1] = "Red";
          Color[Color["Green"] = 2] = "Green";
        })(Color || (Color = {}));
        ;
        var Type;
        (function(Type) {
          Type[Type["Cabrio"] = 0] = "Cabrio";
          Type[Type["Sedan"] = 1] = "Sedan";
          Type[Type["Combi"] = 2] = "Combi";
          Type[Type["Coupe"] = 3] = "Coupe";
        })(Type || (Type = {}));
        ;
        var Car = (function() {
          function Car() {}
          Car.prototype.getColor = function() {
            return this.color;
          };
          Car.prototype.getType = function() {
            return this.type;
          };
          Car.prototype.getNumberOfDoors = function() {
            return this.numberOfDoors;
          };
          return Car;
        })();
      })(CarModule = CarModule || (CarModule = {}));
      exports_1("CarModule", CarModule);
    }
  };
});

//# sourceMappingURL=build.js.map