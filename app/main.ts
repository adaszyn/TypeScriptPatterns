import {Strategy} from "./behavioral/strategy/Strategy"

class Main {
    public static main(): any {
        console.log("Running script");
        var array: Array<number> = [1, 5, 2, 6, 10, 1, -100, 12, 2];
        var strategy = new Strategy();
        console.log(array);
        strategy.sort(array);
        console.log(array);
    }
}
Main.main();
