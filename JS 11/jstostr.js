let person = {
    firstname: "Nadir",
    lastname:"Zamanov",
    age: 42,
    isStudent: false,
    contactInfo:{
        phoneNumber: '+994505518013',
        mail:'Zamanov@itstep.org'
    },
    discipline: ["C++", 'C#', 'JS']
}

// let jsonPerson = JSON.stringify(person)
// alert(jsonPerson)

// function  checkAge(key, value){
//     if(key === 'age' && value < 18){
//         return undefined
//     }
//     return value
// }

// let jsonPerson = JSON.stringify(person, checkAge)
// alert(jsonPerson)
// let person2 =
//     JSON.stringify(person, ['firstname', 'lastname'])
//
// alert(person2)

// alert(JSON.stringify(person, null, 2))

let personString = '{"firstname":"Nadir","lastname":"Zamanov","age":42,"isStudent":true,"contactInfo":{"phoneNumber":"+994505518013","mail":"Zamanov@itstep.org"},"discipline":["C++","C#","JS"]}'

let personObj = JSON.parse(personString)

// alert(personObj.firstname)
// console.log(personObj)

function checkIsStudent(key, value) {
    if (key === 'isStudent' && value === true){
        return undefined
    }
    return value

}

let perspn3 = JSON.parse(personString, checkIsStudent)
console.log(perspn3)

