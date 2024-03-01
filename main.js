const { matchPassword, lengthPassword, strictPassword } = require("./util/validation.js");

const username = "Christian"
const password1 = "p4sSw0rD"
const password2 = "p4sSw0rD"

console.log(storePassword(username, password1, password2))


function validatePassword(password1, password2) {

    let details = ""
    
    if (!matchPassword(password1, password2)) {
        details = "Password does not match!"
        return {
            "is_valid": false,
            "details": details
        }
    }

    if (!lengthPassword(password1)) {
        details = "Password must be at least 8 characters long!"
        return {
            "is_valid": false,
            "details": details
        }
    }

    if (!strictPassword(password1)){
        details = "Password must contain at least 1 number, 1 uppercase character, and 1 lowercase character"
        return {
            "is_valid": false,
            "details": details
        }
    }

    details = "Valid password!"
    return {
        "is_valid": true,
        "details": details
    }
}

function reversePassword(password) {
    let reversedPassword = ""

    for (let i=(password.length-1); i>=0; i--){
        reversedPassword = reversedPassword + password[i] 
    }

    return {
        "reversedPassword": reversedPassword
    }
}


function storePassword(username, password1, password2) {
    const userData = {
        name: username,
        newPassword: password1
    }

    if (validatePassword(password1, password2)["is_valid"]) {
        userData.newPassword = reversePassword(password1)["reversedPassword"]
        return userData
    }

    return userData
}