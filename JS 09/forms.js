const showElements = () => {
    let elements
        = document.forms[0].elements
    let par
        = document.getElementById('out')
    par.innerHTML = ''

    for (let i = 0; i < elements.length; i++) {
        par.innerHTML += `${elements[i].tagName} - ${elements[i].name} - ${elements[i].value}<br>`
    }
}

const showChildren = () => {
    let c
        = document.forms[0].children
    let par
        = document.getElementById('out')
    par.innerHTML = ''

    for (let i = 0; i < c.length; i++) {
        par.innerHTML += `${i + 1}. ${c[i].tagName}<br>`
    }
}

const showNodes = () => {
    let n
        = document.forms[0].childNodes
    let par
        = document.getElementById('out')
    par.innerHTML = ''

    for (let i = 0; i < n.length; i++) {
        par.innerHTML += `${i + 1}. ${n[i].nodeName}<br>`
    }
}


const add_more = () => {
    if (typeof phoneCounter === 'undefined')
        phoneCounter = 1
    phoneCounter++;
    let f = document.forms[0]
    let b = document.createElement('br')
    f.appendChild(b)
    let text1 = document.createTextNode('Phone number ')
    f.appendChild(text1)
    let phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = `phone${phoneCounter}`
    phoneInput.placeholder = "Enter phone number"
    f.appendChild(phoneInput)
    let text2 = document.createTextNode(' Phone type ')
    f.appendChild(text2)
    let selector = f.elements['type']
    let newSelector = selector.cloneNode(true)
    newSelector.name = `type${phoneCounter}`
    f.appendChild(newSelector)

    let text3 = document.createTextNode(' Priority ')
    f.appendChild(text3)

    let mainRadio = document.createElement('input')
    mainRadio.type = 'radio'
    mainRadio.name = 'main'
    mainRadio.value = phoneCounter
    f.appendChild(mainRadio)

}