class Human{
    #id
    #age
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        this.age = age
        this.#id = Math.floor(Math.random() * 10000)
    }

    get age() {
        return this.#age
    }

    set age(value){
        if (value < 0 || value > 157){
            this.#age = 0
        }
        else{
            this.#age = value
        }
    }
    get id(){
        return this.#id
    }

    // set id (value){
    //     this.#id = value
    // }
    showInfo (){
        console.log(`Id: ${this.#id}
Name: ${this.name}
Surname: ${this.surname}
Birth year: ${new Date(this.birthday).getFullYear()}`
        )
    }
}

let human = new Human("Nadir", "Zamanov", 42)
console.log(human.id)
human.id = 326589
human.showInfo()
console.log(human.age)