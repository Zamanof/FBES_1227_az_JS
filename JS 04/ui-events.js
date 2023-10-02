/*
Mouse events
auxclick - əlavə düymənin click-i
click - sol düymənin click-i
dblclick - double click
mousedown - mouse click

mouseenter - kursor elementin sərhədlərinə daxil oldu (üst elementi alır)
mouseover - kursor elementin sərhədlərinə daxil oldu (bütün alt elementləri alır)

mouseleave - kursor elementin sərhədlərini tərk etdi (üst elementi alır)
mouseout - kursor elementin sərhədlərini tərk etdi (bütün alt elementləri alır)

mousemove - mouse-un hərəkəti
mouseup - mouse-un düyməsi buraxılıb
wheel - mouse-un çarxının fırladılması

Keyboard events
keydown - klaviatura düyməsi basılıb
keyup - klaviatura düyməsi buraxılıb
keypress - klaviatura düyməsi basılıb-buraxılıb

*/

div1.onmouseenter = ()=>{
    span1.innerText = 'Div 1'
    console.log('div1.onmouseenter')
}
div1.onmouseover = ()=>{
    div1.style.backgroundColor = 'blue'
    span2.innerText = 'Div 1'
    console.log('div1.onmouseover')
}

div2.onmouseenter = ()=>{

    span1.innerText = 'Div 2'
    console.log('div2.onmouseenter')
}
div2.onmouseover = ()=>{
    div2.style.backgroundColor = 'yellow'
    span2.innerText = 'Div 2'
    console.log('div2.onmouseover')
}