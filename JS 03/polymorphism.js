class Human{
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        this.age = age
    }
    showInfo (){
        console.log(`Name: ${this.name}
Surname: ${this.surname}
Age: ${this.age}`
        )
    }
}

class Student extends Human{
    constructor(name, surname, age, groupname) {
        super(name, surname, age);
        this.groupname = groupname
    }
    showInfo() {
        super.showInfo();
        console.log(`GroupName: ${this.groupname}`)
    }
    toString(){
        return `Name: ${this.name}
Surname: ${this.surname}
Age: ${this.age}`
    }
}

let student1 = new Student("Nadir", "Zamanov", 43, "FBES_1227_az")
// student1.showInfo()

console.log(student1.toString())