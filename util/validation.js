
module.exports = {
    matchPassword: matchPassword,
    lengthPassword: lengthPassword,
    strictPassword: strictPassword,
};

function matchPassword (password1, password2) {
    if (password1 === password2) {
        return true
    } 
    return false
}

function lengthPassword (password) {
    if (password.length >= 8) {
        return true
    }
    return false
}

function numberedPassword (p) {
    if (p >= '0' && p <= '9') {
        return true
    }
    return false
}

function upperedPassword (p) {
    if (p === p.toUpperCase()) {
        return true
    }
    return false
}

function loweredPassword (p) {
    if (p === p.toLowerCase()) {
       return true
    }
    return false
}

function strictPassword (password) {

    const isValid = [false, false, false]

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

    for (let i=0; i<isValid.length; i++) {
        if (isValid[i] === false) {
            return false
        }
    }
    return true
}