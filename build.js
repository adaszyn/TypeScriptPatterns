System.register("app/app.js", ["app/bootstrap.js"], function(exports_1) {
    var bootstrap_1;
    return {
        setters:[
            function (bootstrap_1_1) {
                bootstrap_1 = bootstrap_1_1;
            }],
        execute: function() {
            bootstrap_1.bootstrap();
        }
    }
});

System.register("app/bootstrap.js", [], function(exports_1) {
    function bootstrap() {
        console.log("bootstrap function");
    }
    exports_1("bootstrap", bootstrap);
    return {
        setters:[],
        execute: function() {
        }
    }
});
