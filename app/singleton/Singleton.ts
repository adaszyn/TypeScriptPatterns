export module Singleton {
	interface Girl {
	_needs: Array<string>; 
	needs(): Array<string>;
	}

	export class Rihanna implements Girl{
		_needs: Array<string>;
		private static instance: Rihanna;
		constructor() {
			if (Rihanna.instance) {
				throw new Error('Singleton initialized. Use getInstance()');
			}
			this._needs = [
				'To be the only girl in the world'
			];
			Rihanna.instance = this; 
		}
		needs(): Array<string> {
			return this._needs;
		}
		static getInstance() {
			return this.instance;
		}

	}
}
