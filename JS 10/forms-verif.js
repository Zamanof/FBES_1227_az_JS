// const checkForm = (event)=>{
//     let nameText
//         = document.getElementById('firstname').value
//     console.log(nameText.length)
//     if (nameText.length < 2)
//         return false;
//     return true
// }

// const checkForm = (event)=>{
//     event.preventDefault()
//     let nameText
//          = document.getElementById('firstname').value
//     if (nameText.length > 5){
//         document.getElementById("poll").submit()
//     }
//     else{
//         alert("Length is short")
//     }
// }

const checkButtonClick = ()=>{
    let nameText
          = document.getElementById('firstname').value
        if (nameText.length > 0){
        document.getElementById("poll").submit()
    }
}

