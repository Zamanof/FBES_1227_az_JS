const add_more = ()=>{
    if (typeof phoneCounter === 'undefined'){
        phoneCounter = 1
    }
    phoneCounter++

    let f =document.forms[0]
    let line = f.children[2]
    let newLine = line.cloneNode(true)
    newLine.children[0].name = `phone${phoneCounter}`
    newLine.children[0].value = ''

    newLine.children[1].name = `type${phoneCounter}`
    newLine.children[2].checked = false

    f.insertBefore(newLine, f.children[phoneCounter+1])
}