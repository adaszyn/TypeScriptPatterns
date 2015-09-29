export module PizzaModule {
	enum Type {
		Hawaiian,
		Margarita
	}
	interface Pizza {
		getType(): Type;
	}
	interface PizzaFactoryInterface {
		getPizza(): Pizza; 
	}
	export class HawaiianPizzaFactory implements PizzaFactoryInterface {
		constructor() {

		}
		getPizza() {
			return new HawaiianPizza;
		}
	}
	export class HawaiianPizza implements Pizza {
		getType() {
			return Type.Hawaiian;
		}
	}
}