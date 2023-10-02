// colorBlock.addEventListener('click',
//     ()=>{
//         let r = Math.floor(Math.random()*255)
//         let g = Math.floor(Math.random()*255)
//         let b = Math.floor(Math.random()*255)
//         colorBlock.style.backgroundColor = `rgb(${r},${g},${b})`
//         console.log(r,g,b)
//     })

colorBlock.addEventListener('mousemove',
    (e)=>{
            let r = 127
            let g = e.pageX
            let b = e.pageY
            colorBlock.style.backgroundColor = `rgb(${r},${g},${b})`
            red.innerText = `red: ${r}`
            green.innerText = `green: ${g}`
            blue.innerText = `blue: ${b}`
    })