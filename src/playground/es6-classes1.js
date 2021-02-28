class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi. I am ' + this.name + '!';
        // the below is a template string in ES6
        return `Hi. I am ${this.name}!`
    }
    getDescription () {
        return `${this.name} is ${this.age} years(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !! this.major
    }

    getDescription () {
        let descirption = super.getDescription()
        if (this.hasMajor())
            descirption += ` Their major is ${this.major}`
        return descirption
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation)
            greeting += ` I'm visiting from ${this.homeLocation}.`

        return greeting
    }
}

const me = new Traveler('Sures Setty', 45, 'Reno, NV')
console.log(me.getGreeting())

const other = new Traveler(undefined, undefined, 'Nowhere')
console.log(other.getGreeting())


// const me = new Student('Sures Setty', 45, 'Computer Science')
// console.log(me.getDescription())

// const other = new Student()
// console.log(other.getDescription())


// const me = new Person('Sures Setty', 45)
// console.log(me.getDescription())

// const other = new Person()
// console.log(other.getDescription())