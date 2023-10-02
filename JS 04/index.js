function clickAlert (){
    alert("Hi, my name is div. Qara div. Qaranlıq dünya")
}

// clickableDiv.onclick = ()=>{
//     alert("Hi, my name is div. Qara div")
// }

// clickableDiv.addEventListener('click', clickAlert)
clickableDiv.addEventListener('click', ()=>{
    alert("Hi, my name is div")
    alert("Qara div.")
    alert("Qaranlıq dünya")
})
