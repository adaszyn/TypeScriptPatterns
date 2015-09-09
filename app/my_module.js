System.register([], function(exports_1) {
    function myModule() {
        console.log("message from mymodule");
    }
    exports_1("myModule", myModule);
    return {
        setters:[],
        execute: function() {
        }
    }
});
