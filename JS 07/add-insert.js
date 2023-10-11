// document.createElement(tagName)
// document.createElement('p')

// removeChild(e)
// appendChild(e)
// insertBefore(e1, e2)

const addItem = ()=>{
    let newItem = document.createElement('li');
    newItem.innerText = 'My New Item';
    list.appendChild(newItem);
}

const  insertItem = ()=>{
    let firstItem = list.childNodes[0];
    let newItem = document.createElement('li');
    newItem.innerText = 'My Other New Item';
    list.insertBefore(newItem, firstItem)
}

const removeItem = ()=>{
    let n = 0;
    let elementSecond = false;
    for (let element of list.childNodes){
        if(element.tagName === 'LI') n++;
        if(n === 2){
            elementSecond = element;
            break;
        }
    }
    if(elementSecond) list.removeChild(elementSecond)
}