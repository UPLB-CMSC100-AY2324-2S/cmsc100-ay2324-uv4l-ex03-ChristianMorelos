
module.exports = {
    matchPassword: matchPassword,
    lengthPassword: lengthPassword,
    strictPassword: strictPassword,
};

//checks if password matches
function matchPassword (password1, password2) {
    if (password1 === password2) {
        return true
    } 
    return false
}

//check if password has at least 8 characters
function lengthPassword (password) {
    if (password.length >= 8) {
        return true
    }
    return false
}

//checks if a password character is a number
function numberedPassword (p) {
    if (p >= '0' && p <= '9') {
        return true
    }
    return false
}

//checks if a password character is uppercase
function upperedPassword (p) {
    if (p === p.toUpperCase()) {
        return true
    }
    return false
}

//checks if a password character is lowercase
function loweredPassword (p) {
    if (p === p.toLowerCase()) {
       return true
    }
    return false
}

//checks if password has number, uppercase, and lowercase
function strictPassword (password) {

    const isValid = [false, false, false]

    //runs password through various checks
    for (let i=0; i<password.length; i++) {

        if (numberedPassword(password[i])) {
            isValid[0] = true
        }

        if (upperedPassword(password[i])) {
            isValid[1] = true
        }
        
        if (loweredPassword(password[i])) {
            isValid[2] = true
        }
    }

    //if password failed at least one check return false
    for (let i=0; i<isValid.length; i++) {
        if (isValid[i] === false) {
            return false
        }
    }

    return true
}