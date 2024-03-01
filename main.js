//imported functions from validation.js
const { matchPassword, lengthPassword, strictPassword } = require("./util/validation.js");

const username = "Christian"
const password1 = "p4sSw0rD"
const password2 = "p4sSw0rD"

console.log(storePassword(username, password1, password2))

//runs password through various checks
function validatePassword(password1, password2) {
    
    if (!matchPassword(password1, password2)) {
        return {
            "is_valid": false,
            "details": "Password does not match!"
        }
    }

    if (!lengthPassword(password1)) {
        return {
            "is_valid": false,
            "details": "Password must be at least 8 characters long!"
        }
    }

    if (!strictPassword(password1)){
        return {
            "is_valid": false,
            "details": "Password must contain at least 1 number, 1 uppercase character, and 1 lowercase character"
        }
    }

    //if passwords passed all checks return valid with details
    return {
        "is_valid": true,
        "details": "Valid password!"
    }
}

function reversePassword(password) {
    let reversedPassword = ""

    //create a reverse version of the password
    for (let i=(password.length-1); i>=0; i--){
        reversedPassword = reversedPassword + password[i] 
    }

    return {
        "reversedPassword": reversedPassword
    }
}


function storePassword(username, password1, password2) {

    //initialized user data
    const userData = {
        name: username,
        newPassword: password1,
        details: ""
    }

    let passwordData = validatePassword(password1, password2)
    userData.details = passwordData["details"]

    //if password is valid make new password the reverse
    if (passwordData["is_valid"]) {
        userData.newPassword = reversePassword(password1)["reversedPassword"]
        return userData
    }

    return userData
}