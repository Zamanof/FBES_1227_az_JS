let john = {
    name: "John",
    lastname: "Doe",
    birthday: "01/01/2001",
    showInfo: function () {
        console.log(`Name: ${this.name}
Surname: ${this.lastname}
Birth year: ${new Date(this.birthday).getFullYear()}`
        )
    }
}
// console.log(john.name)
// console.log(john['name'])

john.showInfo()
console.log(john)

let anjelina = {
    name: "Angelina",
    lastname: "Jolie",
    birthday: "06/04/1975",
    showInfo: function () {
        console.log(`Name: ${this.name}
Surname: ${this.lastname}
Birth year: ${new Date(this.birthday).getFullYear()}`
        )
    }
}
anjelina.showInfo()