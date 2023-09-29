function Human(name, surname, birthday){
    this.name = name
    this.surname = surname
    this.birthday = birthday

}

Human.prototype.showInfo = function () {
    console.log(`Name: ${this.name}
Surname: ${this.surname}
Birth year: ${new Date(this.birthday).getFullYear()}`
    )
}

let john = new Human("John", "Doe", "01/01/2001")
john.showInfo()
john["born-city"] = "Sumqayit"
john.country = "Azerabijan"
console.log(john)
console.log(john["born-city"])

