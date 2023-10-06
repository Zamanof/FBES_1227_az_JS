window.onbeforeunload = (e)=>{
    if(txt.value.length > 0){
        let message = 'Text not saved'
        e.returnValue = message
        return message
    }
    return null
}