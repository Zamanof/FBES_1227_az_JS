const checkForm = ()=>{
    let name1
        = document.getElementById('name1').value
    let template1 = /^[A-Z][a-z]*$/
    if (!template1.test(name1)){
        alert("First name is incorrect")
    }
    let name2
        = document.getElementById('name2').value

    if (!template1.test(name2)){
        alert("Last name is incorrect")
    }

    let pass1 =
        document.getElementById('pass1').value
    let pass2 =
        document.getElementById('pass2').value

    if (!/\d/.test(pass1)){
        alert("Password has no digit")
    }
    if (!/[A-Z]/.test(pass1)){
        alert("Password has no upper letter")
    }
    if (!/[a-z]/.test(pass1)){
        alert("Password has no lower letter")
    }
    if (pass1 !== pass2){
        alert("Passwords are no matching")
    }

    let email
        = document.getElementById('email').value
    let emailtemplate = /^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$/
    if (!emailtemplate.test(email)){
        alert("Gmail is not correct")
    }
    return false
}