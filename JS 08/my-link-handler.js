getLinks = ()=>{
    let msg = ''
    let links = document.links
    for (let l of links){
        msg += l.innerText + ` ${l.href} \n`
    }
    console.log(links)
    alert(msg)
}

changeStyle = (num)=>{
    let styleLink
        = document.getElementsByTagName("LINK")[0]
    document.head.removeChild(styleLink)
    styleLink = document.createElement("LINK")
    styleLink.href = `link-style${num}.css`
    styleLink.rel = 'stylesheet'
    document.head.appendChild(styleLink)
}