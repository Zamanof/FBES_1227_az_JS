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

// let human = new Human("Nadir", "Zamanov", 42)
// console.log(human)



