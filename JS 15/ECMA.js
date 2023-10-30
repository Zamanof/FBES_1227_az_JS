// let const
// arrow function

// var some = function () {
//     console.log("Hi")
// }
// some()

// let foo = ()=>{
//     console.log("Hello")
// }
// foo()



// let arr = [1, 9, 8, 9, 6, 4, 7, 556, 1]

// let new_arr = arr.map(function(data) {
//     return data * 2;
// })
// let new_arr = arr.map(data=> data * 2)
// let new_arr = arr.map(data=> { return data * 2})
// function some (data){
//     return data * 2
// }
// new_arr = []
// for (let i = 0; i < arr.length; i++) {
//     new_arr.push(some(arr[i]))
// }
// console.log(new_arr)
//
//
// function isOdd (data){
//     return data%2 != 0
// }
// let odd = arr.filter(data=> data%2 != 0)
// console.log(odd)
// let odd1 = []
// for (let i = 0; i < arr.length; i++) {
//     if(isOdd(arr[i]))
//         odd1.push(arr[i])
// }
//
// console.log(odd1)

// let student = {
//     name: "Nadir",
//     disciplines: ["Python", "C++", "C#", "JS"],
//     showDisciplines: function () {
//         this.disciplines.forEach(function (data) {
//             console.log(`${this.name} learn ${data}`);
//         })
//     }
// }

// student.showDisciplines()

// let student1 = {
//     name: "Nadir",
//     disciplines: ["Python", "C++", "C#", "JS"],
//     showDisciplines: function () {
//         this.disciplines.forEach( (data)=> {
//             console.log(`${this.name} learn ${data}`);
//         })
//     }
// }
// student1.showDisciplines()


// let person = {
//     name: "Nadir",
//     sayHello: ()=>{
//         console.log(`Salam ${this.name}`)
//     }
// }
//
// person.sayHello()

// function constructor

// function Product(name, price){
//     this.name = name;
//     this.price = price
//     this.showInfo = function (){
//         console.log(`Name: ${this.name}. Price: ${this.price}`)
//     }
// }
//
// let kartof = new Product("Gedebey", 1.2)
// console.log(kartof.name)
// console.log(kartof.price)
// kartof.showInfo()


// class keyword
// class Product{
//     static count = 0
//     constructor(name, price) {
//         this._name = name;
//         this._price = price
//     }
//     set name(name){
//         if (name.length !== 0){
//             this._name = name
//         }
//         else {
//             console.log("Incorrect data")
//         }
//     }
//
//     get name(){
//         return this._name
//     }
//     showInfo (){
//         console.log(`Name: ${this._name}. Price: ${this._price} AZN`)
//     }
// }
//
// let kolbasa = new Product("Halal", 256)
// kolbasa.showInfo()
// kolbasa.name = "Salam"
// console.log(kolbasa.name)


// class Person{
//     constructor(name) {
//         this.name = name
//     }
//     showInfo(){
//         console.log(this.name)
//     }
// }
//
// class Employee extends Person{
//     constructor(name, salary) {
//         super(name);
//         this.salary = salary
//     }
//     showInfo() {
//         super.showInfo();
//         console.log(this.salary)
//     }
// }
//
// emp = new Employee("Nadir", 150000)
// // console.log(emp.name)
// emp.showInfo()

// const bar = (a, b=3, c)=>{
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
//
// bar(5)

// import Mathemathic from "./moduleMath.js";
// import {PI as P, E} from './SomeOther.js'
// //
// let m = new Mathemathic()
// console.log(m.add(5, 3))
// console.log(m.add(25, 35))
// console.log(m.add(P, E))

// Destructing object
// let car = {
//     marka: "Mazda",
//     model: "Sanmsung",
//     year: 123
// }
//
// let {marka, model, year=1980} = car
// console.log(marka)
// console.log(model)
// console.log(year)
//
//
// // const foo = (car)=>{
// //     console.log(car.marka)
// //     console.log(car.model)
// //     console.log(car.year)
// // }
// //
// // const bar = ({marka, model, year})=>{
// //     console.log(marka)
// //     console.log(model)
// //     console.log(year)
// // }
// //
// // // foo(car)
// // bar(car)
// let marka = car.marka,
//     model = car.model,
//     year = car.year


// Destructing array
let arr = [25, 69, 5, 254, 78, 69]
let [first, second, third, ...other] = arr
console.log(first)
console.log(second)
console.log(third)
console.log(other)

const SUM = (...arr)=>{
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(SUM(5))
console.log(SUM(12,56, 56, 78))