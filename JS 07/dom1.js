const getStructure = ()=>{
    let c
        = document.documentElement.childNodes;
    let message = '';
    for (let i = 0; i< c.length; i++){
        let d = c[i];
        message += `${i+1}. ${d.tagName} (${d.nodeName}) <br>`
        if (d.hasChildNodes()){
            let e = d.childNodes
            for (let j = 0; j< e.length; j++){
                let f = e[j]
                message += ` &nbsp; &nbsp; ${j+1}. ${f.tagName} (${f.nodeName}) <br>`
                if (f.hasChildNodes()){
                    let g = f.childNodes
                    for (let k = 0; k< g.length; k++){
                        let h = g[k]
                        message += ` &nbsp; &nbsp; &nbsp; &nbsp; ${k+1}. ${h.tagName} (${h.nodeName}) <br>`
                    }
                }
            }
        }
    }
    window.div2.innerHTML = message
}