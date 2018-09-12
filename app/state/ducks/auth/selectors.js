checkIfUserLoggedIn = ( auth ) => {
    return !(auth.token == '' || auth == undefined)
}


export default {
    checkIfUserLoggedIn
};