// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.greet{
	console.log(`Hello, my name is ${name}, I am ${age} years old.`)
}
function Employee(name, age, jobTitle) {
	this.name = name;
	this.age = age;
	this.jobTitle = jobTitle;
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;