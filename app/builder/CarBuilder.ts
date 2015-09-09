module CarModule {
	enum Color { Blue, Red, Green };
	enum Type { Cabrio, Sedan, Combi, Coupe };
	class Car {
		private color: Color;
		private type: Type;
		private numberOfDoors: number;

		getColor(): Color {
			return this.color;
		}
		getType(): Type {
			return this.type;
		}
		getNumberOfDoors(): number {
			return this.numberOfDoors;
		}

		constructor() { }

	}	 
}
