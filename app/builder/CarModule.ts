export module CarModule {
	enum Color { Blue, Red, Green, Yellow };
	enum Type { Cabrio, Sedan, Combi, Coupe, Pickup };
	export class Car {
		private _color: Color;
		private _type: Type;
		private _numberOfDoors: number;

		get color():Color {
			return this._color;
		}
		get type():Type {
			return this._type;
		}
		get numberOfDoors():number {
			return this._numberOfDoors;
		}

		set color(color: Color) {
			this._color = color;
		}
		set type(type: Type) {
			this._type = type;
		}
		set numberOfDoors(number: number) {
			this._numberOfDoors = number;
		}
		constructor() { }
	}	 
	interface CarBuilderInterface {
		getCar(): Car;
		newCarInstance();
		buildColor(): void;
		buildType(): void;
		buildNumberOfDoors(): void;
	}
	export class CarBuilder {
		protected car: Car;
		public getCar(): Car {
			return this.car;
		}
		public newCarInstance() {
			this.car = new Car;
		}
	}
	export class PussyWagonBuilder implements CarBuilderInterface {
		// due to the lack of abstract classes in TS it is
		// necessary to add _car property in every builder
		_car: Car;
		constructor() {
			this._car = new Car();
		}
		public getCar(): Car {
			return this._car;
		}
		public newCarInstance() {
			this._car = new Car();
		}

		buildColor() {
			this._car.color = Color.Yellow;
		}
		buildType(){
			this._car.type = Type.Pickup;
		}
		buildNumberOfDoors() {
			this._car.numberOfDoors = 4;
		}
	}
	export class CarSalesman {
		private _carBuilder: CarBuilderInterface; 
		set carBuilder(carBuilder: CarBuilderInterface) {
			this._carBuilder = carBuilder;
		}
		get carBuilder(): CarBuilderInterface {
			return this._carBuilder;
		}
		getCar() {
			return this._carBuilder.getCar();
		}
		constructCar() {
			this._carBuilder.buildColor();
			this._carBuilder.buildType();
			this._carBuilder.buildNumberOfDoors();
		}
	}

}
