class People{
	constructor(name){
		this.name = name;
	}
	sayhi(){
		console.log(`hi ${this.name} !`);
	}
}
exports.module = People;