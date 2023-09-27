// let array = []
// let array2 = new Array(10)
// let array3 = new Array(2, 6, 9)
// let array4 = [2, 6, 9]

// console.log(array2.length)
// // console.log(array)
// array2[11] = 264
// console.log(array2)
// console.log(array3)
// console.log(array4)

// let mdArr = [
//     [5, 6, true],
//     [8, 9, "Salam"],
//     [-0, -0, {name: "Nadir", age: 42}
//     ]
// ]

// console.log(mdArr[0][2])
// console.log(mdArr[2][2].name)

let arr = new Array(20)
for (let i = 0; i < 20; i++){
    arr[i] = parseInt(Math.random()* 1000 %100)
    arr[i] = parseInt(Math.random()* 1000 %100)
}
console.log(arr)
// console.log(arr.indexOf(7, 5))
// console.log(arr.at(5))

const powTwo = (numb)=>{
    return numb ** 2;
}

// let arr2 = arr.map(powTwo)
// console.log(arr2)

// let arr3 = arr.filter((item)=> item %3 === 0)
// console.log(arr3)

// arr.sort((a, b)=>{
//     if (a > b) return 1
//     else if(a < b) return -1
//     else return 0
// })
// console.log(arr)

let names = [
    "Nadir",
    "Orxan",
    "Rustam",
    "Huseyn",
    "Ali",
    "Islam"
]

let namesStr = names.join(", ")
console.log(namesStr)

let namesArr = namesStr.split(", ")
console.log(namesArr)




