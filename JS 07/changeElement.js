let draggedElement = false
let phantomElement = false

document.onmousedown = (e)=>{
    e.preventDefault()
    let clickedElement =
        document.elementFromPoint(e.clientX, e.clientY)
    if (clickedElement.className.indexOf('item')> -1){
        clickedElement.style.opacity = '0.5'
        draggedElement = clickedElement
    }
}
document.onmousemove = (e)=>{
    if (draggedElement){
        if(!phantomElement){
            phantomElement = document.createElement('div');
            phantomElement.style.backgroundColor = draggedElement.style.backgroundColor;
            phantomElement.style.left = `${e.pageX - draggedElement.offsetWidth/2}px`;
            phantomElement.style.top = `${e.pageY - draggedElement.offsetHeight/2}px`;
            phantomElement.className = 'phantom'
            document.body.appendChild(phantomElement)
        }
        else {
            phantomElement.style.left = `${e.pageX - draggedElement.offsetWidth/2}px`;
            phantomElement.style.top = `${e.pageY - draggedElement.offsetHeight/2}px`;
            phantomElement.style.zIndex = '-1'
            let lowerElement = document.elementFromPoint(e.clientX, e.clientY)
            phantomElement.style.zIndex = '1'
            if(lowerElement != null
                && lowerElement != draggedElement
                && lowerElement.className.indexOf('item') > -1){
                if (lowerElement === window.list.lastChild
                    && e.pageX > (lowerElement.offsetTop + lowerElement.offsetHeight/2)){
                    window.list.removeChild(draggedElement);
                    window.list.appendChild(draggedElement)
                }
                else{
                    if (e.pageY > (lowerElement.offsetTop + lowerElement.offsetHeight/2)){
                        if(lowerElement.previousSibling == draggedElement){
                            window.list.removeChild(draggedElement)
                            window.list.insertBefore(draggedElement, lowerElement.nextSibling)
                        }
                    }
                    else{
                        window.list.removeChild(draggedElement)
                        window.list.insertBefore(draggedElement, lowerElement.nextSibling)
                    }
                }
            }
        }
    }
}

document.onmouseup = (e)=>{
    if(draggedElement){
        draggedElement.style.opacity = '1'
        draggedElement = false
    }
    if(phantomElement){
        document.body.removeChild(phantomElement)
        phantomElement = false
    }
}
