function Human(name, gender) {
	this.name = name;
	this.gender = gender;

	this.intro = function () {
		console.log(`Name: ${this.name} Gender: ${this.gender}.`);
	};
}

function Flat() {
	this.residents = [];

	this.addResident = function (human) {
		if (human instanceof Human) {
			this.residents.push(human);
			return this.residents;
		} else {
			return 'Error';
		}
	};
}

function Building(maxFlats) {
	this.flats = [];
	this.maxFlats = maxFlats;

	this.addFlat = function (flat) {
		if (this.flats.length < this.maxFlats) {
			this.flats.push(flat);
		} else {
			console.log('Cannot add new flat. Maximum number of flats reached.');
		}
	};
}

const person1 = new Human('John', 'male');
const person2 = new Human('Mike', 'male');
const person3 = new Human('Max', 'male');
const person4 = new Human('Irena', 'female');

const flat1 = new Flat();
const flat2 = new Flat();
flat1.addResident(person1);
flat1.addResident(person2);
flat2.addResident(person3);
flat2.addResident(person4);

const building1 = new Building(3);
console.log(`Maximum number of flats in the building: ${building1.maxFlats}`);
building1.addFlat(flat1);
building1.addFlat(flat2);

building1.flats.forEach((el) => {
	el.residents.forEach((person) => {
		console.log(`Residents of the building: ${person.name}`);
	});
});

console.log(building1.flats);
