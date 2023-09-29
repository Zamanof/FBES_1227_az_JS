class Human{
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        this.age = age
    }
    showInfo (){
        console.log(`Name: ${this.name}
Surname: ${this.surname}
Birth year: ${new Date(this.birthday).getFullYear()}`
        )
    }
}

class Student extends Human{
    constructor(name, surname, age, groupname) {
        super(name, surname, age);
        this.groupname = groupname
    }
}

let student1 = new Student("Nadir", "Zamanov", 43, "FBES_1227_az")
console.log(student1)


class Other extends Student{

}

let oth = new Other()
console.log(oth)
