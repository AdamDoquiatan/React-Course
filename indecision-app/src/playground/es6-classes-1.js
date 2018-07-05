class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description =+ ` Their major is ${this.major}`
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        if (this.homeLocation) {
            return `Hi! I am ${this.name}. I'm visiting from ${this.homeLocation}!`
        } else {
            return `Hi! I am ${this.name}.`
        }
    }
}

const person1 = new Traveler('Adam Doquiatan', 29, 'Vancouver')
console.log(person1.getGreeting())

const person2 = new Traveler()
console.log(person2.getGreeting())