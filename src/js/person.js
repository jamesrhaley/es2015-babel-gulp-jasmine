export default class Person {
	constructor(name) {
		this._name = name;
	}

	sayHello() {
		return `It all works. Enjoy!\nBest, ${this._name}`;
	}
}