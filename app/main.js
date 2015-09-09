System.register(["./my_module", ], function(exports_1) {
    var my_module_1, module_1;
    return {
        setters:[
            function (_my_module_1) {
                my_module_1 = _my_module_1;
            },
            function (_module_1) {
                module_1 = _module_1;
            }],
        execute: function() {
            my_module_1.myModule();
            console.log(module_1.Car);
        }
    }
});
