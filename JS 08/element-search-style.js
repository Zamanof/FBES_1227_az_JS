selectDiv1 = ()=>{
    let element
    = document.getElementById("div1")
    element.style.backgroundColor = "#cfc"
}

selectClass1 = ()=>{
    let elements
        = document.getElementsByClassName("class1")
    for (let element of elements){
        element.style.backgroundColor = "#fcc"
    }
}

selectP = ()=>{
    let elements
        = document.getElementsByTagName('p')
    for (let element of elements){
        element.style.backgroundColor = "#ccf"
    }
}

selectName1 = ()=>{
    let elements
        = document.getElementsByName('name1')
    for (let element of elements){
        element.style.backgroundColor = "#bef"
    }
}

clr = ()=>{
    let elements
        = document.querySelectorAll('div, p')
    for (let element of elements){
        element.style.backgroundColor = "#eee"
    }
}