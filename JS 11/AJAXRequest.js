// let request = ActiveXObject('Microsoft.XMLHTTP')
// let request = new XMLHttpRequest()

let request;

if (window.XMLHttpRequest){
    request = new XMLHttpRequest()
}
else{
    request = ActiveXObject('Microsoft.XMLHTTP')
}

// .open(method, URL [, async, user, password])

// onreadystatechange

// 0 - request non initialized
// 1 - request initialized
// 2 - request is sent
// 3 - request is handling
// 4 - request handle is ready, server response received


request.open("GET", "https://www.omdbapi.com/?t=Avatar&apikey=124df000")

let info = document.getElementById('info')
request.responseType = 'application/json'

request.onreadystatechange = ()=>{
    console.log(`state = ${request.readyState} - status = ${request.status}`)
    if (request.readyState === 4 && request.status === 200){
        let movie = request.response

        console.log(movie)
        info.innerText = `Title: ${JSON.parse(movie)['Title']}`
    }

}

request.send()